"""collab URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from collab_app import views
# from rest_framework.documentation import include_docs_urls


urlpatterns = [
    # path(r'docs/', include_docs_urls(title='Helpdesk API')), 
    path('', views.apiOverview, name="Api Overview"), 
    
    path('drivelist/', views.drive_list, name="list-drive"),
	path('drive-detail/<str:pk>/', views.drive_detail, name="detail-drive"),
    path('studentlist/', views.student_list, name="list-student"),
	# path('student-detail/<str:pk>/', views.student_detail, name="detail-student"),

]

