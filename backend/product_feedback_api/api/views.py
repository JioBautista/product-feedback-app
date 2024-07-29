from .models import ProductRequests, Comments
from rest_framework import viewsets
from .serializers import ProductRequestSerializer

# Create your views here.


class ProductRequestViewSet(viewsets.ModelViewSet):
    queryset = ProductRequests.objects.all()
    serializer_class = ProductRequestSerializer
