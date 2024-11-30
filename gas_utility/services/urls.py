# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from rest_framework.authtoken.views import obtain_auth_token
# from .views import ServiceRequestViewSet, RegisterView, LogoutView, CustomLoginView
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny
# from rest_framework.response import Response

# # Set up DefaultRouter for Service Requests
# router = DefaultRouter()
# router.register(r'requests', ServiceRequestViewSet)
# @api_view(['GET'])
# @permission_classes([AllowAny])
# def api_root_view(request):
#     return Response({
#         'requests': request.build_absolute_uri('requests/'),
#         'login': request.build_absolute_uri('api/login/'),
#         'register': request.build_absolute_uri('api/register/'),
#         'logout': request.build_absolute_uri('api/logout/')
#     })

# urlpatterns = [
#     path('', api_root_view, name='api-root'),

#     # Authentication-related views
#     path('token-auth/', obtain_auth_token, name='token_auth'),  # Login to get token
#     path('register/', RegisterView.as_view(), name='register'),  # User registration

#     path('login/', CustomLoginView.as_view(), name='custom_login'),  # Custom login route
#     path('logout/', LogoutView.as_view(), name='logout'),  # Logout the user
# ]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceRequestViewSet, CurrentUserView, CustomLoginView, RegisterView, LogoutView
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register(r'requests', ServiceRequestViewSet, basename='requests')  # Ensure you use `basename`

urlpatterns = [
    path('current_user/', CurrentUserView.as_view(), name='current_user'),

    path('', include(router.urls)),  # Include the router for requests
    path('register/', RegisterView.as_view(), name='register'),
    path('token-auth/', obtain_auth_token, name='token_auth'),  # Login to get token
    path('login/', CustomLoginView.as_view(), name='custom_login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
