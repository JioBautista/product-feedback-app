# Generated by Django 5.0.6 on 2024-09-18 20:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_remove_productrequests_comments_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productrequests',
            name='comments',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.comments'),
        ),
    ]
