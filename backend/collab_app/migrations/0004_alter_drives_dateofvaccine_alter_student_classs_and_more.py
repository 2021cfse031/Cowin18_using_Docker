# Generated by Django 4.0.2 on 2022-03-02 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collab_app', '0003_alter_drives_id_alter_student_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drives',
            name='dateofvaccine',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='student',
            name='classs',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='student',
            name='vaccinedate',
            field=models.CharField(max_length=100),
        ),
    ]
