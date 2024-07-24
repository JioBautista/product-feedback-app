from django.db import models

# Create your models here.


class ProductRequests(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    upvotes = models.IntegerField(default=0)
    status = models.CharField(max_length=255)
    description = models.CharField(max_length=255)


class Comments(models.Model):
    content = models.CharField(max_length=255)


class Replies(models.Model):
    content = models.CharField(max_length=255)
    replyingTo = models.CharField(max_length=255)


class Users(models.Model):
    image = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
