from django.contrib import admin
from .models import ProductRequests

# Register your models here.


class ProductRequestAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "upvotes", "status", "description")


admin.site.register(ProductRequests, ProductRequestAdmin)
