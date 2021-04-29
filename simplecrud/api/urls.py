from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from .views import UserViewSet, TechnologyViewSet, ServiceViewSet, AddressViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('technologies', TechnologyViewSet)
router.register('services', ServiceViewSet)
router.register('addresses', AddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', obtain_auth_token)
]
