from typing import final
from .serializers import MySQLDatabaseSerializer, NodeScriptSerializer, UserSerializer, WebsiteSerializer
from rest_framework.views import APIView
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status, generics
from users.models import NodeScript, MySQLDatabase, Website
from django.core.files.storage import FileSystemStorage
from zipfile import ZipFile
from random import randint
from os import system, getcwd, chdir, remove
import mysql.connector
from shutil import rmtree

import environ

env = environ.Env()
environ.Env.read_env()

# Create your views here.

class NodeView(APIView):

	parser_classes = [FormParser, MultiPartParser]

	def get(self, request, format=None):
		scripts = NodeScript.objects.filter(user=request.user)
		data = []
		for script in scripts:
			data.append(NodeScriptSerializer(script).data)
		return Response({"scripts": data, "available": request.user.profile.nodejsAvailable}, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		try:
			zip = request.data['file']
			path = f'{request.user.username}/nodejs/{randint(0,100000)}/'
			fs = FileSystemStorage(location=path)
			fs.save("unzip.zip", request.data['file'])
			with ZipFile(f'{path}/unzip.zip', 'r') as zip:
				zip.extractall(path)
			remove(f'{path}/unzip.zip')
			cwd = getcwd()
			chdir(path)
			system(f"npm install")
			system(f"pm2 start index.js")
			chdir(cwd)
			NodeScript.objects.create(user=request.user, folder=path, name=request.data['name'])
			request.user.profile.nodejsAvailable -= 1
			request.user.profile.save()
			return Response({"success": "Successfully uploaded nodejs script"}, status=status.HTTP_200_OK)
		except Exception as e:
			print(e)
			return Response({"error": "Could not receive nodejs script"}, status=status.HTTP_400_BAD_REQUEST)


class NodeDetailView(APIView):

	def patch(self, request, pk, format=None):
		script = NodeScript.objects.filter(pk=pk, user=request.user)
		if len(script) == 1:
			try:
				script = script[0]
				if script.status == "running":
					script.status = "stopped"
					system(f'pm2 stop {script.folder}/index.js')
				else:
					script.status = "running"
					system(f'pm2 start {script.folder}/index.js')
				script.save()
				return Response({"success": "Successfully updated nodejs script", "status": script.status}, status=status.HTTP_200_OK)
			except Exception as e:
				print(e)
				return Response({"error": "Error updating nodejs script"}, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({"error": "Could not get script"}, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, pk, format=None):
		script = NodeScript.objects.filter(pk=pk, user=request.user)
		if len(script) == 1:
			try:
				script = script[0]
				system(f'pm2 delete {script.folder}/index.js')
				rmtree(script.folder)
				script.delete()
				request.user.profile.nodejsAvailable += 1
				request.user.profile.save()
				return Response({"success": "Successfully deleted nodejs script"}, status=status.HTTP_200_OK)
			except Exception as e:
				print(e)
				return Response({"error": "Error removing nodejs script"}, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({"error": "Could not get script"}, status=status.HTTP_400_BAD_REQUEST)


class MySQLView(APIView):

	def get(self, request, format=None):
		databases = MySQLDatabase.objects.filter(user=request.user)
		data = []
		for database in databases:
			data.append(MySQLDatabaseSerializer(database).data)
		return Response({"databases":data, "available": request.user.profile.mysqlAvailable}, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		database = request.data['name']
		username = request.data['username']
		password = request.data['password']
		cnx = mysql.connector.connect(user='root', host='127.0.0.1', password=env('MYSQLPASSWORD'))	
		try:
			cursor = cnx.cursor()
			cursor.execute(f"create database {database}")
			cursor.execute(f"create user '{username}'@'%' identified by '{password}'")
			cursor.execute(f"grant all privileges on {database}.* to '{username}'@'%'")
			cursor.execute("flush privileges")
			cnx.close()
			MySQLDatabase.objects.create(name=database, username=username, password=password, user=request.user)
			request.user.profile.mysqlAvailable -= 1
			request.user.profile.save()
			return Response({"success": "Successfully created mysql database"}, status=status.HTTP_200_OK)
		except Exception as e:
			print(e)
			cnx.close()
			return Response({"error": "Error creating mysql database"}, status=status.HTTP_400_BAD_REQUEST)


class MySQLDetailView(APIView):
	def get(self, request, pk, format=None):
		database = MySQLDatabase.objects.filter(pk=pk, user=request.user)
		if len(database) == 1:
			database = database[0]
			return Response(MySQLDatabaseSerializer(database).data, status=status.HTTP_200_OK)
		return Response({"error": "Could not get database"}, status=status.HTTP_400_BAD_REQUEST)

	def post(self, request, pk, format=None):
		database = MySQLDatabase.objects.filter(pk=pk, user=request.user)
		if len(database) == 1:
			database = database[0]
			cnx = mysql.connector.connect(user=database.username, database=database.name, password=database.password, host="127.0.0.1")	
			try:
				cursor = cnx.cursor()
				cursor.execute(request.data['query'])
				output = cursor.fetchall()
				cnx.commit()
				cnx.close()
				return Response({"success": "Successfully created mysql database", "output": str(output)}, status=status.HTTP_200_OK)
			except Exception as e:
				print(e)
				cnx.close()
				return Response({"error": "Error creating mysql database"}, status=status.HTTP_400_BAD_REQUEST)

		return Response({"error": "Could not get database"}, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, pk, format=None):
		database = MySQLDatabase.objects.filter(pk=pk, user=request.user)
		if len(database) == 1:
			database = database[0]
			cnx = mysql.connector.connect(user="root", host="127.0.0.1", password=env('MYSQLPASSWORD'))	
			try:
				cursor = cnx.cursor()
				cursor.execute(f"drop database if exists {database.name}")
				cursor.execute(f"drop user if exists '{database.username}'@'%'")
				cnx.close()
				database.delete()
				request.user.profile.mysqlAvailable += 1
				request.user.profile.save()
				return Response({"success": "Successfully deleted mysql database"}, status=status.HTTP_200_OK)
			except Exception as e:
				print(e)
				cnx.close()
				return Response({"error": "Error deleting mysql database"}, status=status.HTTP_400_BAD_REQUEST)

		return Response({"error": "Could not get database"}, status=status.HTTP_400_BAD_REQUEST)


class WebsiteView(APIView):

	parser_classes = [FormParser, MultiPartParser]

	def get(self, request, format=None):
		websites = Website.objects.filter(user=request.user)
		data = []
		for website in websites:
			data.append(WebsiteSerializer(website).data)
		return Response({"websites":data, "available": request.user.profile.websitesAvailable}, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		name = request.data['name']
		path = f'/var/www/{randint(0,100000)}/'
		CONF_TEMPLATE = f"""
		<VirtualHost *:443>

			ServerName {name}.{env('DOMAIN')}
			ServerAlias *.{name}.{env('DOMAIN')}
			DocumentRoot {path}
			FallbackResource /index.html
	
			SSLEngine on
			SSLCertificateFile {env('SSLDOMAIN')}
			SSLCertificateKeyFile {env('SSLKEY')}
			SSLCertificateChainFile {env('SSLCHAIN')}

		</VirtualHost>
		"""

		try:
			zip = request.data['file']
			fs = FileSystemStorage(location=path)
			fs.save("unzip.zip", request.data['file'])
			with ZipFile(f'{path}/unzip.zip', 'r') as zip:
				zip.extractall(path)
			remove(f'{path}/unzip.zip')
			with open(f'/etc/apache2/sites-enabled/{request.user}{name}.conf', 'w') as file:
				file.write(CONF_TEMPLATE)
			system("sudo service apache2 reload")
			Website.objects.create(user=request.user, name=name, url=f"{name}.{env('DOMAIN')}", folder=path)
			request.user.profile.websitesAvailable -= 1
			request.user.profile.save()
			return Response({"success": "Successfully uploaded website"}, status=status.HTTP_200_OK)
		except Exception as e:
			print(e)
			return Response({"error": "Could not receive nodejs script"}, status=status.HTTP_400_BAD_REQUEST)

		
class WebsiteDetailView(APIView):
	def delete(self, request, pk, format=None):
		website = Website.objects.filter(pk=pk, user=request.user)
		if len(website) == 1:
			website = website[0]
			remove(f'/etc/apache2/sites-enabled/{request.user}{website.name}.conf')
			rmtree(website.folder)
			system("sudo service apache2 reload")
			website.delete()
			request.user.profile.websitesAvailable += 1
			request.user.profile.save()
			return Response({"success": "Successfully deleted website"}, status=status.HTTP_200_OK)

		return Response({"error": "Could not get database"}, status=status.HTTP_400_BAD_REQUEST)


class GetSelfView(APIView):
  def get(self, request):
    print(request.user.profile)
    try:
      profile = request.user.profile
      data = UserSerializer(profile).data
      return Response({"user":data}, status=status.HTTP_200_OK)
    except Exception as e:
      print(e)
      return Response({"error": "error getting profile"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
