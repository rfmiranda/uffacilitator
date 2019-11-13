from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'disciplinas', views.Disciplinas, basename='disciplinas')
# router.register(r'disciplina/atualizar', views.AtualizarDisciplinas, basename='disciplinas')

urlpatterns = router.urls