from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'disciplinas', views.Disciplinas, basename='disciplinas')
router.register(r'cursos', views.Cursos, basename='cursos')
router.register(r'repositorios', views.Repositorios, basename='repositorios')
router.register(r'sistemas', views.Sistemas, basename='sistemas')
router.register(r'grades', views.Grades, basename='grades')

urlpatterns = router.urls