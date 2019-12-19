from graphene_django import DjangoObjectType
import graphene
from myapp.models import UserModel


class User(DjangoObjectType):
    class Meta:
        model = UserModel


class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return UserModel.objects.all()


schema = graphene.Schema(query=Query)
