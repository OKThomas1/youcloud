from rest_framework.serializers import ModelSerializer, CharField
from users.models import Profile
from django.contrib.auth.models import User
from users.models import NodeScript, MySQLDatabase, Website


class UserSerializer(ModelSerializer):
	username = CharField(source="user.username")
	class Meta:
		model = Profile
		fields = ('nodejsAvailable', 'mysqlAvailable', 'websitesAvailable')


class NodeScriptSerializer(ModelSerializer):
	class Meta:
		model = NodeScript
		fields = '__all__'


class MySQLDatabaseSerializer(ModelSerializer):
	class Meta:
		model = MySQLDatabase
		fields = '__all__'


class WebsiteSerializer(ModelSerializer):
	class Meta:
		model = Website
		fields = '__all__'