# Generated by Django 5.0.6 on 2024-07-24 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_comments_productrequest'),
    ]

    operations = [
        migrations.AddField(
            model_name='productrequests',
            name='comments',
            field=models.ManyToManyField(to='api.comments'),
        ),
    ]
