from django.shortcuts import render
from django.http import JsonResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate

# from django.contrib.auth.models import User# Create your views here.
from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
from .models import ytc_user, courses_temp, CustomAccountManager, course_modules
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
        course_id = request.POST['course_id']
        creator = ytc_user.objects.get(user_id = user_id).user_creator
        new_course = courses_temp(course_ids = course_id, creator = creator)
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
        id_set = set()
        for course in all_courses:
            if course.course_id not in id_set:
                course_names.append([course.course_id, course.course_name])
                id_set.add(course.course_id)
        return JsonResponse({"courses": course_names}, safe=False)
@csrf_exempt
def get_enrolled_courses(request):
    if request.method == 'GET':
        user_id = request.GET['student_id']
        user = ytc_user.objects.get(user_id = user_id)
        all_courses = user.student.enrolled_courses.all()
        print(user.user_name, all_courses.values())
        course_names = []
        id_set = set()
        for course in all_courses:
            if course.course_id not in id_set:
                course_names.append([course.course_id, course.course_name])
                id_set.add(course.course_id)
        return JsonResponse({"courses": course_names}, safe=False)

@csrf_exempt
def add_module(request):
    if request.method == 'POST':
        course_id = request.POST['course_id']
        parent_course = courses_temp.objects.get(course_id = course_id)
        week = str(request.POST['week'])
        topics = request.POST['topics']
        video = request.POST['video']
        notes_link = request.POST['notes']
        assignment_link = request.POST['assignment']
        quiz_link = request.POST['quiz']
        
        new_module = course_modules(parent_course = parent_course, week = week, topics = topics,
                                    video = video, notes_link = notes_link, assignment_link = assignment_link,
                                    quiz_link = quiz_link)
        new_module.save()



        return JsonResponse({"add_course":"course_added"}, safe=False)
    

@csrf_exempt
def modify_course(request):
    if request.method == 'POST':
        if request.POST['action'] == 'title_description':
            course_id = request.POST['course_id']
            parent_course = courses_temp.objects.get(course_id = course_id)
            parent_course.course_name = request.POST['course_name']
            parent_course.description = request.POST['description']
            parent_course.save()

            return JsonResponse({"name":"changed"}, safe=False)

@csrf_exempt
def get_modules(request):
    if request.method == 'GET':
        course_id = request.GET['course_id']
        parent_course = courses_temp.objects.get(course_id = course_id)
        modules = parent_course.modules.all()
        course_name = parent_course.course_name
        description = parent_course.description
        weeks_array = []
        topics_array = []
        videos_array = []
        notes_links_array = []
        assignment_links_array = []
        quiz_links_array =[]
        print(modules)
        for module in modules: 
           weeks_array.append(module.week)
           topics_array.append(module.topics)
           videos_array.append(module.video)
           notes_links_array.append(module.notes_link)
           assignment_links_array.append(module.assignment_link)
           quiz_links_array.append(module.quiz_link)

        response = {
            "course_name": course_name,
            "description": description,
            "weeks_array": weeks_array,
            "topics_array": topics_array,
            "videos_array": videos_array,
            "notes_links_array": notes_links_array,
            "assignment_links_array": assignment_links_array,
            "quiz_links_array": quiz_links_array
        }
        return JsonResponse(response, safe=False)
