# Generated by Django 4.1.3 on 2022-11-26 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="mysqldatabase",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name="nodescript",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name="website",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
