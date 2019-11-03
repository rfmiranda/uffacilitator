from django.conf.urls import include, url  # noqa
from django.contrib import admin
from django.views.generic import TemplateView

import django_js_reverse.views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jsreverse/$', django_js_reverse.views.urls_js, name='js_reverse'),
    url(r'^home/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='home'),
    url(r'^disciplina/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='homedisciplina'),
    url(r'^quadro-de-horarios/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='quadro'),
    url(r'^grade-curricular/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='grade'),
    url(r'^sistemas/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='sistemas'),
    url(r'^repositorio/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='repositorio'),
    url(r'^galeria/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='galeria'),
    url(r'^forum/$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='forum'),

    url(r'^$', TemplateView.as_view(template_name='login/index.html'), name='login'),
]
