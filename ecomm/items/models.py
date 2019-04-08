from django.db import models

# Create your models here.
class Item(models.Model):
    name=models.CharField(null=False, blank=False, max_length=127)
    image = models.ImageField(upload_to="photos/", blank=True, null=True)
    description=models.CharField(null=True, blank=True, max_length=1023)
    price=models.IntegerField(null=False, blank=False)

