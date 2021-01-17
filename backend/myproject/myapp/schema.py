from graphene_django import DjangoObjectType
import graphene
from myapp.models import UserModel


class UserType(DjangoObjectType):
    class Meta:
        model = UserModel


class Query(graphene.ObjectType):
    users = graphene.List(UserType)

    def resolve_users(self, info):
        return UserModel.objects.all()


class CreateUser(graphene.Mutation):
    id = graphene.Int()
    first_name = graphene.String()
    last_name = graphene.String()

    class Arguments:
        first_name = graphene.String()
        last_name = graphene.String()

    def mutate(self, info, first_name, last_name):
        user = UserModel(first_name=first_name, last_name=last_name)
        user.save()

        return CreateUser(
            id=user.id,
            first_name=user.first_name,
            last_name=user.last_name,
        )


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()


schema = graphene.Schema(
    query=Query,
    mutation=Mutation
)
