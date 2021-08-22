from .models import Token
from rest_framework import viewsets, permissions
from .serializers import TokenSerializer


class TokenViewSet(viewsets.ModelViewSet):
    queryset = Token.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TokenSerializer

