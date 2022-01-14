from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
# Create your views here.
def index(request):
    return HttpResponse({"test"})

@csrf_exempt
def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username = username, password = password)
    if (user is not None) and user.has_perm('upload'):
        return HttpResponse('OK')
    elif user is not None:
        return HttpResponse('Wrong permissions')
    return HttpResponse('No user found')
