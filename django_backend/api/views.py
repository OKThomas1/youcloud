from .serializers import NodeScriptSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status, generics
from users.models import NodeScript, MySQLDatabase, Website
from django.core.files.storage import FileSystemStorage
from zipfile import ZipFile
from random import randint
from os import system
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
		try:
			zip = request.data['file']
			path = f'{request.user.username}/nodejs/{randint(0,100000)}/'
			fs = FileSystemStorage(location=path)
			fs.save("unzip.zip", request.data['file'])
			with ZipFile(f'{path}/unzip.zip', zip):
				zip.extractall(path)
			system(f"pm2 start {path}/index.js")
			NodeScript.objects.create(user=request.user, folder=path)
		except Exception as e:
			print(e)
			return Response({"error": "Could not receive nodejs script"}, status=status.HTTP_400_BAD_REQUEST)
		return Response({"success": "Successfully uploaded nodejs script"}, status=status.HTTP_200_OK)



class MySQLView(APIView):
	parser_classes = [FormParser, MultiPartParser]
	def get(self, request, format=None):
		return 

	def post(self, request, format=None):
		return 


class WebsiteView(APIView):
	parser_classes = [FormParser, MultiPartParser]
	def get(self, request, format=None):
		return 

	def post(self, request, format=None):
		return 

class NodeDetailView(APIView):
	def delete(self, request, pk, format=None):
		script = NodeScript.objects.filter(pk=pk)
		if len(script) == 1:
			try:
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
		return 

	def delete(self, request, pk, format=None):
		return

class WebsiteDetailView(APIView):
	def delete(self, request, pk, format=None):
		return

class GetSelfView(APIView):
  def get(self, request):
    try:
      profile = request.user.profile
      data = UserSerializer(profile).data
      return Response({"user":data}, status=status.HTTP_200_OK)
    except:
      return Response({"error": "error getting profile"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
