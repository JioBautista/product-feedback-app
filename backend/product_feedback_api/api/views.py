from .models import ProductRequests, Comments
from rest_framework import viewsets
from .serializers import ProductRequestSerializer, CommentsSerializer

# Create your views here.


class ProductRequestViewSet(viewsets.ModelViewSet):
    queryset = ProductRequests.objects.all()
    serializer_class = ProductRequestSerializer


class CommentsViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
