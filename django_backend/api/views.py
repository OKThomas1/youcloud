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
from os import system, getcwd, chdir
import mysql.connector

# Create your views here.

class NodeView(APIView):

	parser_classes = [FormParser, MultiPartParser]

	def get(self, request, format=None):
		scripts = NodeScript.objects.filter(user=request.user)
		data = []
		for script in scripts:
			data.append(NodeScriptSerializer(script).data)
		return Response(data, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		print(request.data)
		try:
			zip = request.data['file']
			path = f'{request.user.username}/nodejs/{randint(0,100000)}/'
			fs = FileSystemStorage(location=path)
			fs.save("unzip.zip", request.data['file'])
			with ZipFile(f'{path}/unzip.zip', 'r') as zip:
				zip.extractall(path)
			cwd = getcwd()
			chdir(path)
			system(f"npm install")
			system(f"pm2 start index.js")
			chdir(cwd)
			NodeScript.objects.create(user=request.user, folder=path, name=request.data['name'])
		except Exception as e:
			print(e)
			return Response({"error": "Could not receive nodejs script"}, status=status.HTTP_400_BAD_REQUEST)
		return Response({"success": "Successfully uploaded nodejs script"}, status=status.HTTP_200_OK)



class MySQLView(APIView):

	parser_classes = [FormParser, MultiPartParser]

	def get(self, request, format=None):
		databases = MySQLDatabase.objects.filter(user=request.user)
		data = []
		for database in databases:
			data.append(MySQLDatabaseSerializer(database).data)
		return Response(data, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		database = request.data['database']
		username = request.data['username']
		password = request.data['password']
		cnx = mysql.connector.connect(user='root', host='127.0.0.1')	
		try:
			cursor = cnx.cursor()
			cursor.execute(f"create database {database}")
			cursor.execute(f"create user '{username}'@'%' identified by '{password}'")
			cursor.execute(f"grant all privileges on {database}.* to '{username}'@'%'")
			cursor.execute("flush privileges")
			cnx.close()
			MySQLDatabase.objects.create(name=database, username=username, password=password, user=request.user)
			return Response({"success": "Successfully created mysql database"}, status=status.HTTP_200_OK)
		except Exception as e:
			print(e)
			cnx.close()
			return Response({"error": "Error creating mysql database"}, status=status.HTTP_400_BAD_REQUEST)



class WebsiteView(APIView):

	parser_classes = [FormParser, MultiPartParser]

	def get(self, request, format=None):
		websites = Website.objects.filter(user=request.user)
		data = []
		for website in websites:
			data.append(WebsiteSerializer(website).data)
		return Response(data, status=status.HTTP_200_OK)

	def post(self, request, format=None):
		return 

class NodeDetailView(APIView):
	def delete(self, request, pk, format=None):
		script = NodeScript.objects.filter(pk=pk, user=request.user)
		if len(script) == 1:
			try:
				script = script[0]
				system(f'pm2 delete {script.folder}/index.js')
				script.delete()
				return Response({"success": "Successfully deleted nodejs script"}, status=status.HTTP_200_OK)
			except Exception as e:
				print(e)
				return Response({"error": "Error removing nodejs script"}, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({"error": "Could not get script"}, status=status.HTTP_400_BAD_REQUEST)

class MySQLDetailView(APIView):
	def get(self, request, pk, format=None):
		database = MySQLDatabase.objects.filter(pk=pk, user=request.user)
		if len(database) == 1:
			database = database[0]
			return Response(MySQLDatabaseSerializer(database).data, status=status.HTTP_200_OK)
		return Response({"error": "Could not get database"}, status=status.HTTP_400_BAD_REQUEST)

	def post(self, request, pk, format=None):
		return

	def delete(self, request, pk, format=None):
		return

class WebsiteDetailView(APIView):
	def delete(self, request, pk, format=None):
		return

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
