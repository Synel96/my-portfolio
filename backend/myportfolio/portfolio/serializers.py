from rest_framework import serializers
from .models import Project, ProjectImage, Certification

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image_url']

class ProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True) 

    class Meta:
        model = Project
        fields = ['id', 'title', 'stack', 'description', 'project_url', 'images']

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'
