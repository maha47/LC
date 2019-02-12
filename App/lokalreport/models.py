from django.db import models
from django.core import serializers
from django.core.serializers import serialize
import json




class Channel(models.Model):
    Title = models.CharField(max_length=50)
    Contributors = models.CharField(
        max_length=50, blank=True)

    Description = models.CharField(
        max_length=50,
        blank=True,
        null=True,)
    def __str__(self):
        return self.Title

class Post(models.Model):
    Title = models.CharField(max_length=50)
    Teaser = models.CharField(max_length=140)
    Channel = models.ForeignKey(
        'Channel',
        on_delete=models.CASCADE,
    )
    Videolink = models.CharField(max_length=500)
    lon = models.DecimalField(max_digits=8, decimal_places=6, default = 9.6554)
    lat = models.DecimalField(max_digits=8, decimal_places=6, default = 52.3194)

    Upload_Time = models.DateTimeField(auto_now=False, auto_now_add=True)
    def __str__(self):
        return self.Title
    def publish(self):
        self.Upload_Time = timezone.now()
        self.save()

