from django.contrib import admin
from .models import Token



class TokenAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'num_operations', 'value_token')
    list_display_links = ('id', 'name')
    search_fields = ('name',)
    list_editable = ('num_operations',)
    list_filter = ('value_token',)


admin.site.register(Token, TokenAdmin)