import os
from django.db import migrations

import environ

env = environ.Env()
environ.Env.read_env()

class Migration(migrations.Migration):
    dependencies = [

    ] # can also be emtpy if it's your first migration

    def generate_superuser(apps, schema_editor):
        from django.contrib.auth.models import User

        DJANGO_SU_NAME = env('DJANGO_SU_NAME')
        DJANGO_SU_EMAIL = env('DJANGO_SU_EMAIL')
        DJANGO_SU_PASSWORD = env('DJANGO_SU_PASSWORD')

        superuser = User.objects.create_superuser(
            username=DJANGO_SU_NAME,
            email=DJANGO_SU_EMAIL,
            password=DJANGO_SU_PASSWORD)

        superuser.save()

    operations = [
        migrations.RunPython(generate_superuser),
    ]