from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ItemSerializer

from items.models import Item


class ItemList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request):
        items = Item.objects.all().order_by('-pk')
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class SearchItems(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, key):
        items = Item.objects.filter(name__contains=key)
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)