from django.db import models

# Create your models here.


class ProductRequests(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    upvotes = models.IntegerField(default=0)
    status = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
