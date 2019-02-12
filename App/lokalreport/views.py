
from django.shortcuts import render

from django.utils import timezone
from .models import Post
import json
from django.http import JsonResponse





def post_list(request):
    posts = Post.objects.all().order_by('Upload_Time')
    return render(request, 'lokalreport/map.html', {'posts': posts})




def index(request):


    return render(request, 'lokalreport/index.html')

def map(request):
    return render(

        request, 'lokalreport/realmap.html')

