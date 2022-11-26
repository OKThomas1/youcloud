from ast import Delete
from rest_framework.views import APIView
from rest_framework.parsers import FormParser, MultiPartParser

# Create your views here.

class NodeView(APIView):

	parser_classes = [FormParser, MultiPartParser]

	def get(self, request, format=None):
		return 

	def post(self, request, format=None):
		return 


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
		return

class MySQLDetailView(APIView):
	def get(self, request, pk, format=None):
		return 

	def delete(self, request, pk, format=None):
		return

class WebsiteDetailView(APIView):
	def delete(self, request, pk, format=None):
		return


