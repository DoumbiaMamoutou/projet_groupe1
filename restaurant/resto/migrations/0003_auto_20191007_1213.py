# Generated by Django 2.2.5 on 2019-10-07 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configuration', '0002_auto_20191006_1645'),
        ('resto', '0002_auto_20191007_1043'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plat',
            name='today',
        ),
        migrations.AddField(
            model_name='plat',
            name='days',
            field=models.ManyToManyField(related_name='day_plat', to='configuration.Day'),
        ),
    ]
