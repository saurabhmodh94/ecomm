# Generated by Django 2.2 on 2019-04-08 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=127)),
                ('image', models.ImageField(blank=True, null=True, upload_to='photos/')),
                ('description', models.CharField(blank=True, max_length=1023, null=True)),
                ('price', models.IntegerField()),
            ],
        ),
    ]
