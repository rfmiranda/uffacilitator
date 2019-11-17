from django.conf.urls import include, url  # noqa
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import include as path_include, path
from .views import login, verify_token, logout_view

urlpatterns = [
    path('api/login', login),
    path('api/logout', logout_view),
    path('api/verify', verify_token),
    path('accounts/', include('django.contrib.auth.urls')),

]
