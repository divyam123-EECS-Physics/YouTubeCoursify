"""sal_khan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import path
from atwell.views import simple_call
from atwell.views import csrf
from atwell.views import add_course, add_user, get_created_courses, login, get_enrolled_courses
from atwell.views import ping

urlpatterns = [
    path("admin/", admin.site.urls),
    path("simple_call/", simple_call),
    path("login/", login),
    path("add_course/", add_course),
    path("add_user/", add_user),
    path("login/", add_user),
    path("get_created_courses/", get_created_courses),
    path("get_enrolled_courses/", get_enrolled_courses),
    path("csrf/", csrf),
    path("ping/",ping)
]
