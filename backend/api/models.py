from django.db import models
from django.conf import settings


# Create your models here.

class Grade_curricular(models.Model):
    carga_horario = models.BigIntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Disciplinas(models.Model):
    usuario = models.ForeignKey(
            settings.AUTH_USER_MODEL,
            on_delete=models.CASCADE, null=True )
    grades = models.ManyToManyField(Grade_curricular)
    nome = models.CharField(max_length=255)
    codigo = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.nome

class Cursos(models.Model):
    usuario = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE, null=True
    )
    grade = models.ForeignKey(
        Grade_curricular,
        on_delete=models.CASCADE, null=True
    )
    nome = models.CharField(max_length=255)
    carga_horaria = models.TextField()
    duracao = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Repositorios(models.Model):
    usuario = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE, null=True )
    url = models.CharField(max_length=255)
    descricao = models.TextField()
    ativo = models.BooleanField(default=True)
    favorito = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Sistemas(models.Model):
    usuario = models.ForeignKey(
            settings.AUTH_USER_MODEL,
            on_delete=models.CASCADE, null=True )    
    url = models.CharField(max_length=255)
    descricao = models.TextField()
    ativo = models.BooleanField(default=True)
    favorito = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

