from django.shortcuts import render
from .data import sidebar_data, sub_navbar_items


def home(request):
    user_name = getattr(request.user, 'first_name', None) or getattr(request.user, 'username', None) or 'User'
    return render(request, 'index.html', {
        'sidebar_data': sidebar_data,
        'sub_navbar_items': sub_navbar_items,
        'user_name': user_name,
    })
