from .models import ProductRequests
from rest_framework import serializers


class ProductRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRequests
        fields = "__all__"
