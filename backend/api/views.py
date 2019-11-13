from rest_framework.viewsets import ModelViewSet

from . import models
from . import serializers

class Disciplinas(ModelViewSet):
    queryset = models.Disciplinas.objects.all()
    serializer_class = serializers.DisciplinasSerializer
