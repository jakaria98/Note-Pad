from django.urls import path
from . import views

app_name = "api"

urlpatterns = [
    # class-based views
    path('notes/', views.NoteListCreate.as_view(), name='note-list'),
    path('notes/update/<int:pk>/', views.NoteUpdate.as_view(), name='note-update'),
    path('notes/delete/<int:pk>/', views.NoteDelete.as_view(), name='note-delete'),
]
