from rest_framework import serializers

from . import models

class DisciplinasSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Disciplinas
        fields = ('id', 'nome', 'usuario')

