from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, CertificationViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'certifications', CertificationViewSet)


urlpatterns = [
   path('api/', include(router.urls)),
]