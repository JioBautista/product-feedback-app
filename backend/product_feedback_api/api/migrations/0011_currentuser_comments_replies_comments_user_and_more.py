# Generated by Django 5.0.6 on 2024-07-29 20:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_comments_content'),
    ]

    operations = [
        migrations.CreateModel(
            name='CurrentUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='comments',
            name='replies',
            field=models.ManyToManyField(to='api.replies'),
        ),
        migrations.AddField(
            model_name='comments',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.users'),
        ),
        migrations.AddField(
            model_name='replies',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.users'),
        ),
    ]