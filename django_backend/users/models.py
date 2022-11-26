from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
	user = models.OneToOneField(User,on_delete=models.CASCADE, related_name="profile")
	nodejsAvailable = models.IntegerField(default=0)
	mysqlAvailable = models.IntegerField(default=0)
	websitesAvailable = models.IntegerField(default=0)


class NodeScript(models.Model):
	id = models.AutoField(primary_key=True)
	folder = models.CharField(max_length=1000)
	status = models.CharField(max_length=50, default="running")
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	name = models.CharField(max_length=50)


class MySQLDatabase(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)
	username = models.CharField(max_length=50)
	password = models.CharField(max_length=50)
	user = models.ForeignKey(User, on_delete=models.CASCADE)


class Website(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	url = models.CharField(max_length=200)
	folder = models.CharField(max_length=200)