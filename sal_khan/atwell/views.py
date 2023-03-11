from django.shortcuts import render
from django.http import JsonResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
from .models import user_temp, courses_temp
def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

def ping(request):
    return JsonResponse({'result':'OK'})

@csrf_exempt
def simple_call(request):
    print("hello react")
    print(request)
    if request.method == 'GET':
        print("GET REQUEST DONE")
        return JsonResponse({"HI":3}, safe=False)
    if request.method == 'POST':
        print(request)
        return JsonResponse({"HI":3}, safe=False)
@csrf_exempt
def add_user(request):
    if request.method == 'POST':
        user_name = request.POST['name']
        new_user = user_temp(user_name = user_name)
        print(new_user)
        new_user.save()
        return JsonResponse({"add_user":"done"}, safe=False)
    
@csrf_exempt
def add_course(request):
    if request.method == 'POST':
        user_name = request.POST['creator_name']
        course_name = request.POST['course_name']
        creator = user_temp.objects.get(user_name = user_name)
        new_course = courses_temp(course_name = course_name, creator = creator)
        new_course.save()
        return JsonResponse({"add_course":"done"}, safe=False)

@csrf_exempt
def get_courses(request):
    if request.method == 'GET':
        user_name = request.GET['creator_name']
        user = user_temp.objects.get(user_name = user_name)
        all_courses = user.courses.all()
        print(user, all_courses.values())
        course_names = []
        for course in all_courses:
            if course not in set(course_names):
                course_names.append(course.course_name)
        return JsonResponse({"courses": course_names}, safe=False)
