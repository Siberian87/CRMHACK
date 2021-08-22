from rest_framework import routers, urlpatterns
from .api import TokenViewSet


router = routers.DefaultRouter()
router.register('api/token', TokenViewSet, 'token')


urlpatterns = router.urls