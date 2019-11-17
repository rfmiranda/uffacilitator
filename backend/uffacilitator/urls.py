from django.conf.urls import include, url  # noqa
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import include as path_include, path
from .view import index as index_view

import django_js_reverse.views

urlpatterns = [
    path('api/', path_include('api.urls')),
    path('users/', path_include('users.urls')),
    url(r'^home/', index_view, name='home'),    
    url(r'^admin/', admin.site.urls),
    url(r'^jsreverse/$', django_js_reverse.views.urls_js, name='js_reverse'),
    url(r'^disciplina/$', index_view, name='homedisciplina'),
    url(r'^quadro-de-horarios/$', index_view, name='quadro'),
    url(r'^grade-curricular/$', index_view, name='grade'),
    url(r'^sistemas/$', index_view, name='sistemas'),
    url(r'^repositorio/$', index_view, name='repositorio'),
    url(r'^galeria/$', index_view, name='galeria'),
    url(r'^forum/$', index_view, name='forum'),

    url(r'^$', TemplateView.as_view(template_name='login/index.html'), name='login'),
]
