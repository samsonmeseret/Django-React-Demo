from django.http import JsonResponse
from .users_data import USERS

def user_list(request):
    return JsonResponse(list(USERS.values()), safe=False)

def user_detail(request, user_id):
    user = USERS.get(user_id)
    if user:
        return JsonResponse(user)
    else:
        return JsonResponse({"error": "User not found"}, status=404)