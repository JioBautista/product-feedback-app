from .models import ProductRequests, CurrentUser
from rest_framework import viewsets
from .serializers import ProductRequestSerializer, CurrentUserSerializer

# Create your views here.


class ProductRequestViewSet(viewsets.ModelViewSet):
    queryset = ProductRequests.objects.all()
    serializer_class = ProductRequestSerializer


class CurrentUserViewSet(viewsets.ModelViewSet):
    queryset = CurrentUser.objects.all()
    serializer_class = CurrentUserSerializer
