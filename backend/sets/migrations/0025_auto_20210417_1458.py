# Generated by Django 3.1.6 on 2021-04-17 12:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sets', '0024_auto_20210416_1307'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='completed',
            name='setOwner',
        ),
        migrations.RemoveField(
            model_name='completed',
            name='title',
        ),
        migrations.RemoveField(
            model_name='saved',
            name='setOwner',
        ),
        migrations.RemoveField(
            model_name='saved',
            name='title',
        ),
    ]
