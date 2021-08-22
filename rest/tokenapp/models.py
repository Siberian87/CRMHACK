from django.db import models


class Token(models.Model):

    name = models.CharField(max_length=100, null=False, unique=True)
    num_operations = models.IntegerField()
    value_token = models.IntegerField()


    def __str__(self):
        return self.name


