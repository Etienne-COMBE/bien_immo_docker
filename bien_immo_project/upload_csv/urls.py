from django.urls import path, include
from . import views

urlpatterns = [
    path('save_data/', views.save_data, name = "save_data")
]