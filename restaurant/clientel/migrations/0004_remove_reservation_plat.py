# Generated by Django 2.2.5 on 2019-10-09 20:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clientel', '0003_merge_20191009_1235'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reservation',
            name='plat',
        ),
    ]