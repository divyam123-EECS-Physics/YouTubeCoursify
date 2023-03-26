from django.shortcuts import render
from django.http import JsonResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate

# from django.contrib.auth.models import User# Create your views here.
from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
from .models import ytc_user, courses_temp, CustomAccountManager
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
        user_name = request.POST['user_name']
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(user_name = user_name)
        if user:
            return JsonResponse({"user_token":ytc_user.objects.get(user_name = user_name).user_id}, safe=False)
        new_user = ytc_user.objects.create_user(email = email, user_name = user_name, password = password)
        token = new_user.user_id
        return JsonResponse({"user_token":token}, safe=False)
    
@csrf_exempt
def login(request):
    if request.method == 'GET':
        user_name = request.GET['user_name']
        # email = request.GET['email']
        password = request.GET['password']
        user = ytc_user.objects.get(user_name = user_name, password = password)
        if user:
            return JsonResponse({"user_token":user.user_id}, safe=False)
        return JsonResponse({"user_token":""}, safe=False)
    
@csrf_exempt
def add_course(request):
    if request.method == 'POST':
        user_id = request.POST['creator_name']
        course_name = request.POST['course_name']
        creator = ytc_user.objects.get(user_id = user_id).user_creator
        new_course = courses_temp(course_name = course_name, creator = creator)
        new_course.save()
        return JsonResponse({"add_course":"done"}, safe=False)

@csrf_exempt
def get_created_courses(request):
    if request.method == 'GET':
        print("INSIDE GET CREATOR")
        user_id = request.GET['creator_id']
        user = ytc_user.objects.get(user_id = user_id)
        all_courses = user.creator.created_courses.all()
        print(user.user_name, all_courses.values())
        course_names = []
        for course in all_courses:
            if course not in set(course_names):
                course_names.append(course.course_name)
        return JsonResponse({"courses": course_names}, safe=False)
@csrf_exempt
def get_enrolled_courses(request):
    if request.method == 'GET':
        user_id = request.GET['student_id']
        user = ytc_user.objects.get(user_id = user_id)
        all_courses = user.student.enrolled_courses.all()
        print(user.user_name, all_courses.values())
        course_names = []
        for course in all_courses:
            if course not in set(course_names):
                course_names.append(course.course_name)
        return JsonResponse({"courses": course_names}, safe=False)
