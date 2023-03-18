from django.contrib import admin
from .models import ytc_user, courses_temp, user_student, user_creator
# Register your models here.
admin.site.register(ytc_user)
admin.site.register(courses_temp)
admin.site.register(user_student)
admin.site.register(user_creator)