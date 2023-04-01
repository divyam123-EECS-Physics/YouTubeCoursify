from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager, User
# Create your models here.
import string
import random
 



class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, user_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        return self.create_user(email, user_name = user_name, password = password, **other_fields)

    def create_user(self, email, user_name, password, **other_fields):
        email = self.normalize_email(email)
        token = ''.join(random.choices(string.ascii_lowercase + string.digits, k=10))

        user = self.model(email = email, user_name = user_name, user_id = token, password = password, **other_fields)
        # user.set_password(password)
        user.save()
        
        creator = user_creator (user = user)
        creator.save()
        
        student = user_student(user = user)
        student.save()

        return user

def create_class(course_name, description, creator):
        token = ''.join(random.choices(string.ascii_lowercase + string.digits, k=10))

        
        course = courses_temp(course_name = course_name, course_id = token, creator = creator)        
        course.save()

        return course


class ytc_user(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    user_name = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=False)
    first_name = models.CharField(max_length=500, blank=True)
    last_name = models.CharField(max_length=500, blank=True)
    about = models.TextField(max_length=500, blank=True)
    is_active = models.BooleanField(default=False)

    user_id = models.CharField(max_length=500, default='null')

    objects = CustomAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'password']
    def __str__(self):
        return self.user_name


class user_creator(models.Model):
    user = models.OneToOneField(ytc_user, on_delete=models.CASCADE, related_name='creator')


class user_student(models.Model):
    user = models.OneToOneField(ytc_user, on_delete=models.CASCADE, related_name='student')

class courses_temp(models.Model):

    course_name = models.CharField(max_length=50)
    course_id = models.CharField(max_length=500, default='null')
    description = models.TextField(default='')
    creator = models.ForeignKey(user_creator, on_delete=models.DO_NOTHING, related_name='created_courses')
    students = models.ManyToManyField(user_student, related_name='enrolled_courses')
    # description = ##text field
    def __str__(self):
        return self.course_name

class course_modules(models.Model):
    parent_course = models.ForeignKey(courses_temp, on_delete=models.DO_NOTHING, related_name='modules')
    week = models.IntegerField(default = 0)
    topics = models.CharField(max_length = 150)
    video = models.CharField(max_length = 150)
    notes_link = models.CharField(max_length = 150)
    assignment_link = models.CharField(max_length = 150)
    quiz_link = models.CharField(max_length=150)
    
