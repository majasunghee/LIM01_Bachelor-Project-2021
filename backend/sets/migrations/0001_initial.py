# Generated by Django 3.1.6 on 2021-03-08 20:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('chat', '0002_auto_20210308_1607'),
        ('forstaelse', '0002_auto_20210226_1657'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sets',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chat1', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='chat1', to='chat.chat')),
                ('chat2', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='chat2', to='chat.chat')),
                ('forstaelse1', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='forstaelse1', to='forstaelse.forstaelse')),
                ('forstaelse2', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='forstaelse2', to='forstaelse.forstaelse')),
            ],
        ),
    ]