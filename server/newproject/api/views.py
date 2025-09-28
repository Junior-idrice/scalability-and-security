from django.shortcuts import render
from .models import Book

# ✅ correct imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializer import BookSerializer


@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True).data
    return Response(serializer)

@api_view(['POST'])
def create_book(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True).data
    return Response(serializer)

