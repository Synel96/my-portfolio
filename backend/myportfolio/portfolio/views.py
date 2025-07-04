from django.shortcuts import render
from rest_framework import viewsets, filters
from .models import Project, Certification
from .serializers import ProjectSerializer, CertificationSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'stack', 'description']  

class CertificationViewSet(viewsets.ModelViewSet):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'technologies', 'description']
    ordering_fields = ['date']
    ordering = ['-date']  

