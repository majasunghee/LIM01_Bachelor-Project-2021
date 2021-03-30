# Generated by Django 3.1.6 on 2021-03-28 13:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('rydde_setninger', '0003_auto_20210317_1730'),
    ]

    operations = [
        migrations.AddField(
            model_name='ryddesetninger',
            name='owner',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, to='accounts.useraccount'),
            preserve_default=False,
        ),
    ]
