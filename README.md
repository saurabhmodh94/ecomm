# E-Comm

# Introduction

Django project and REST API endpoints for e-comm website and search results..

## How to run the code

### Prerequisites

- [virtualenv](https://virtualenv.pypa.io/en/latest/)

### Initialize the project

Create and activate a virtualenv:

```bash
virtualenv -p python3 .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Note: The project uses following packages.

> Django==2.1.7  
>  djangorestframework==3.9.2  
>  psycopg2==2.7.7

Migrate, create a superuser, and run the server:

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## REST APIs endpoints created under this projects:

'api/items/'- GET: List of Items, Recent First
'api/items/'- POST: Create Item  
'api/items/<searchkey>/'- GET: Search Items, searches on name if it contains the keyword

## Load Dummy Data

run the following command to load dummy data:

```bash
pythom manage.py loaddata fixtures.json #<path-to-fixture-file>
```

## Setup front-end server

run the following command to start the server:  

```bash  
npm install  
npm run dev  
```
