from django.core.files.storage import FileSystemStorage
from django.shortcuts import render

# Create your views here.
from items.models import Item

def index(request):
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        b = Item(name='Beatles Blog', image=myfile, description="sada", price=12)
        b.save()
        # fs = FileSystemStorage()
        # filename = fs.save(myfile.name, myfile)
        # uploaded_file_url = fs.url(filename)
        return render(request, 'frontend/index.html', {
            'uploaded_file_url': b.image.url
        })
    return render(request, 'frontend/index.html', {})