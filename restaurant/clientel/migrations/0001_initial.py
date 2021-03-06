# Generated by Django 2.2.5 on 2019-10-06 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=160)),
                ('email', models.EmailField(max_length=254)),
                ('numero', models.CharField(max_length=160)),
                ('date', models.DateField()),
                ('heure', models.TimeField()),
                ('personne', models.IntegerField()),
                ('date_add', models.DateTimeField(auto_now_add=True)),
                ('date_update', models.DateTimeField(auto_now=True)),
                ('status', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Reservation',
                'verbose_name_plural': 'Reservations',
            },
        ),
        migrations.CreateModel(
            name='Temoignage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=160)),
                ('commentaire', models.TextField()),
                ('image', models.ImageField(upload_to='client/testimonial')),
                ('job', models.CharField(max_length=255)),
                ('date_add', models.DateTimeField(auto_now_add=True)),
                ('date_update', models.DateTimeField(auto_now=True)),
                ('status', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Temoignage',
                'verbose_name_plural': 'Temoignages',
            },
        ),
    ]
