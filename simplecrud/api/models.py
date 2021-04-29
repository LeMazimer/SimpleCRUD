from django.db import models


class Address(models.Model):
    id = models.IntegerField(primary_key=True)
    street = models.CharField(max_length=250)
    house_number = models.CharField(max_length=25)
    administrative_zone = models.TextField(max_length=250)
    postal_zone = models.CharField(max_length=250)


class Technology(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)


class Service(models.Model):
    id = models.IntegerField(primary_key=True)
    address_id = models.IntegerField()
    tech_id = models.IntegerField()
    supported = models.BooleanField()
