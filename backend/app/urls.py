from django.urls import path
from app import views


urlpatterns = [
    path('', views.getRoutes, name='getRoutes'),
    path('users/register/', views.registerUser, name='register'),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('products/', views.getProducts, name='getProducts'),
    path('user/profile/', views.getUserProfiles, name='getUserProfiles'),
    path('products/<str:pk>', views.getProduct, name='getProduct'),
    path('users/', views.getUsers, name='getUsers'),
]
