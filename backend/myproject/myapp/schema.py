from graphene_django import DjangoObjectType
import graphene
from myapp.models import UserModel
from myapp.subscriptions import UserSubscription


class UserType(DjangoObjectType):
    class Meta:
        model = UserModel


class Query(graphene.ObjectType):
    users = graphene.List(UserType)

    def resolve_users(self, info):
        return UserModel.objects.all()


class CreateUser(graphene.Mutation):
    id = graphene.Int()
    name = graphene.String()
    last_name = graphene.String()

    class Arguments:
        name = graphene.String()
        last_name = graphene.String()

    def mutate(self, info, name, last_name):
        user = UserModel(name=name, last_name=last_name)
        user.save()

        return CreateUser(
            id=user.id,
            name=user.name,
            last_name=user.last_name,
        )


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()


class Subscription(graphene.ObjectType):
    user_subscription = UserSubscription.Field()


schema = graphene.Schema(
    query=Query,
    mutation=Mutation,
    subscriptions=Subscription
)
