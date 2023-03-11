from django.db import models

# Create your models here.
class user_temp(models.Model):
    user_name = models.CharField(max_length=50)

    def __str__(self):
        return self.user_name


class courses_temp(models.Model):

    course_name = models.CharField(max_length=50)
    creator = models.ForeignKey(user_temp, on_delete=models.DO_NOTHING, related_name='courses')