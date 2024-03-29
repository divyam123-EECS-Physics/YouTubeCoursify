# Generated by Django 4.1.7 on 2023-04-01 06:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("atwell", "0007_courses_temp_course_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="course_modules",
            name="parent_course",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.DO_NOTHING,
                related_name="modules",
                to="atwell.courses_temp",
            ),
        ),
    ]
