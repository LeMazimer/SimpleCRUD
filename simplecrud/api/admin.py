from django.contrib import admin
from .models import Address, Technology, Service

# Register your models here.
admin.site.register(Address)
admin.site.register(Technology)
admin.site.register(Service)
