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
    creator = models.ForeignKey(user_creator, on_delete=models.DO_NOTHING, related_name='created_courses')
    students = models.ManyToManyField(user_student, related_name='enrolled_courses')

    def __str__(self):
        return self.course_name
    
