from .models import ProductRequests, Comments, Users, Replies, CurrentUser
from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer


class CurrentUserSerializer(WritableNestedModelSerializer):
    class Meta:
        model = CurrentUser
        fields = ["id", "image", "name", "username"]


class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ["image", "name", "username"]


class RepliesSerializer(WritableNestedModelSerializer):
    user = UsersSerializer(required=False)

    class Meta:
        model = Replies
        fields = ["content", "replyingTo", "user"]


class CommentsSerializer(WritableNestedModelSerializer):
    user = UsersSerializer(required=False)
    replies = RepliesSerializer(many=True, required=False)

    class Meta:
        model = Comments
        fields = ["id", "content", "user", "replies"]


class ProductRequestSerializer(WritableNestedModelSerializer):
    comments = CommentsSerializer(many=True, required=False)

    class Meta:
        model = ProductRequests
        depth = 1
        fields = [
            "id",
            "title",
            "category",
            "upvotes",
            "status",
            "description",
            "comments",
        ]
