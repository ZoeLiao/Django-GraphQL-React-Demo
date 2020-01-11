from graphene_django_subscriptions.subscription import Subscription
from myapp.serializers import UserSerializer


class UserSubscription(Subscription):
    class Meta:
        serializer_class = UserSerializer
        stream = 'users'
        description = 'User Subscription'
