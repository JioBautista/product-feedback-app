from .models import ProductRequests, Comments
from rest_framework import serializers


class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = "__all__"


class ProductRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRequests
        fields = "__all__"
