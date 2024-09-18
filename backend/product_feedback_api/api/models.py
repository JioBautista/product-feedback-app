from django.db import models

# Create your models here.


class Users(models.Model):
    image = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)


class Replies(models.Model):
    content = models.CharField(max_length=255)
    replyingTo = models.CharField(max_length=255)
    user = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True)


class Comments(models.Model):
    content = models.CharField(max_length=255, null=True, blank=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True)
    replies = models.OneToOneField(
        Replies, on_delete=models.CASCADE, null=True, blank=True
    )


class ProductRequests(models.Model):
    title = models.CharField(max_length=255, null=True)
    category = models.CharField(max_length=255)
    upvotes = models.IntegerField(
        default=0,
    )
    status = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True)
    comments = models.OneToOneField(
        Comments, on_delete=models.CASCADE, null=True, blank=True
    )


class CurrentUser(models.Model):
    image = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
