from django.urls import path
from . import views

app_name = "api"

urlpatterns = [
    # class-based views
    path('notes/', views.NoteListCreate.as_view(), name='note-list'),
    path('notes/update/<int:pk>/', views.NoteDetail.as_view(), name='note-detail'),
]
