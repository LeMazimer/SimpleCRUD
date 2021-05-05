from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Address, Technology, Service


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        # write_only makes sure password isnt obtained on a GET
        extra_kwargs = {
            "password": {
                "write_only": True,
                "required": True
            }
        }

    # noinspection PyUnresolvedReferences
    def create(self, validated_data):
        # this will hash the password
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ["id", "street", "house_number", "administrative_zone", "postal_zone"]


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ["id", "name"]


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["id", "address_id", "tech_id", "supported"]
