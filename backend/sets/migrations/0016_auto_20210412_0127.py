# Generated by Django 3.1.6 on 2021-04-11 23:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sets', '0015_remove_comment_created_on'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='comment',
            unique_together=set(),
        ),
    ]
