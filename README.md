# Django-GraphQL-React-Demo

Introduce how to use GraphQL to connect Django and React
## Medium:
- [Django + GraphQL + React —1. Integrate GraphQL into your Django project](https://medium.com/@zoejoyuliao/django-graphql-react-1-integrate-graphql-into-your-django-project-ff51237bb5d9)
- [Django + GraphQL + React — 2. Integrate GraphQL into your React project](https://medium.com/@zoejoyuliao/django-graphql-react-2-integrate-graphql-into-your-react-project-71fa74f1cb00)

## Demo Images:
- Django - GraphiQL - Mutation:  
  ![Django - GraphiQL - Mutation](https://miro.medium.com/max/1279/1*u-B-WQ5nfI3q3URSfcZ4xA.png)
- Django - GraphiQL - Query:  
  ![Django - GraphiQL - Query](https://miro.medium.com/max/1280/1*zD_QIqmfOKymenXJg_d4fw.png)
- React - Query:  
  ![React - Query](https://miro.medium.com/max/793/1*eDgjw6WCP_xfJTeUEEykig.png)

## Backend
- Dirctory: backend
- Language: Python3
- Framework: Django

### Set Up
- `cd backend`
- `virtualenv venv`
- `source venv/bin/activate`
- `pip install -r requirements.txt`
- `cd myproject`
- `python manage.py migrate`
- `python manage.py runserver`
- Visit [http://localhost:8000/graphql](http://localhost:8000/graphql)

## Frontend
- Directory: frontend
- Library: React

### Set Up
- `cd frontend/app`
- `npm start`
- Visit [http://localhost:3000](http://localhost:3000)
