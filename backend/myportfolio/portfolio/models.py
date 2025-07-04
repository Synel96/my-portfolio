from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    stack = models.CharField(max_length=255)  
    description = models.TextField()
    preview_image_url = models.URLField()  
    project_url = models.URLField(blank=True, null=True)  

    def __str__(self):
        return self.title


class Certification(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    technologies = models.CharField(max_length=255)  
    description = models.TextField(blank=True, null=True)  
    preview_image_url = models.URLField()  

    def __str__(self):
        return f"{self.title} ({self.date})"
