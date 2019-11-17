from rest_framework import serializers

from . import models

class DisciplinasSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Disciplinas
        fields = ('id', 'nome', 'usuario')

class CursosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cursos
        fields = ('id', 'nome', 'usuario', 'carga_horaria', 'duracao', 'grade')

class RepositoriosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Repositorios
        fields = ('id', 'url', 'usuario', 'descricao', 'ativo', 'favorito')

class SistemasSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sistemas
        fields = ('id', 'url', 'usuario', 'descricao', 'ativo', 'favorito')

class GradesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Grade_curricular
        fields = ('id', 'carga_horario')

