from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import AllowAny

from . import models
from . import serializers

class Disciplinas(ModelViewSet):
    serializer_class = serializers.DisciplinasSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        user = self.request.user
        return models.Disciplinas.objects.filter(usuario=user.id)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

class Cursos(ModelViewSet):
    serializer_class = serializers.CursosSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        user = self.request.user
        return models.Cursos.objects.filter(usuario=user.id)

class Repositorios(ModelViewSet):
    serializer_class = serializers.RepositoriosSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return models.Repositorios.objects.filter(usuario=user.id)
    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

class Sistemas(ModelViewSet):
    serializer_class = serializers.SistemasSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return models.Sistemas.objects.filter(usuario=user.id)
    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

class Grades(ModelViewSet):
    queryset = models.Grade_curricular.objects.all()
    serializer_class = serializers.GradesSerializer
    permission_classes = [AllowAny]
