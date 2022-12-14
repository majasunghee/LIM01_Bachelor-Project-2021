from rest_framework import serializers
from .models import Sets, Saved, Comment, Rating, Completed


"""
 @author Maja, Simen
 This is the serializer for the all the models related to exercise sets.
"""


class SetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sets
        fields = ('id', 'title', 'description', 'forstaelse1', 'forstaelse2', 'forstaelse3', 'forstaelse4',
                  'forstaelse5', 'chat1', 'chat2', 'chat3', 'chat4', 'chat5',
                  'ryddeSetninger1', 'ryddeSetninger2', 'ryddeSetninger3', 'ryddeSetninger4',
                  'ryddeSetninger5')
        owner = serializers.ReadOnlyField(source='owner.email')


"""
 In addition to the fields in the model, this serializes a field for set owner which is
 the name of the owner and not just the pk(email).
 This is needed in addition to the serialzer above because it is necessary to get more 
 detailed information about the owner and not just the foreign key. 
"""
class GetSetsSerializer(serializers.ModelSerializer):
    setOwner = serializers.SerializerMethodField()

    def get_setOwner(self, obj):
        # Owner is a foreign key and owner.name is the name of the referenced user in the foriegn key.
        return obj.owner.name

    class Meta:
        model = Sets
        fields = ('id', 'setOwner', 'title', 'description', 'forstaelse1', 'forstaelse2', 'forstaelse3', 'forstaelse4',
                  'forstaelse5', 'chat1', 'chat2', 'chat3', 'chat4', 'chat5',
                  'ryddeSetninger1', 'ryddeSetninger2', 'ryddeSetninger3', 'ryddeSetninger4',
                  'ryddeSetninger5')
        owner = serializers.ReadOnlyField(source='owner.email')


class SavedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saved
        fields = ('id', 'sets')
        owner = serializers.ReadOnlyField(source='owner.email')


"""
 This serializer is necessary in addition to the one above because more information about the owner
 and set is needed and not just the foreign keys. 
"""
class GetSavedSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    setOwner = serializers.SerializerMethodField()

    def get_title(self, obj):
        # The set title connected to the referenced primary key for "sets".
        return obj.sets.title

    def get_setOwner(self, obj):
        # Owner is a foreign key and owner.name is the name of the referenced user in the foriegn key.
        return obj.sets.owner.name

    class Meta:
        model = Completed
        fields = ('id', 'sets', 'title', 'setOwner')
        owner = serializers.ReadOnlyField(source='owner.email')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'sets', 'comment', 'name')
        owner = serializers.ReadOnlyField(source='owner.email')


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'sets', 'rating')
        owner = serializers.ReadOnlyField(source='owner.email')


class CompletedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Completed
        fields = ('id', 'sets', 'score')
        owner = serializers.ReadOnlyField(source='owner.email')


"""
 This serializer is necessary in addition to the one above because more information about the owner
 and set is needed and not just the foreign keys. 
"""
class GetCompletedSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    setOwner = serializers.SerializerMethodField()

    def get_title(self, obj):
        return obj.sets.title

    def get_setOwner(self, obj):
        return obj.sets.owner.name

    class Meta:
        model = Completed
        fields = ('id', 'sets', 'score', 'title', 'setOwner')
        owner = serializers.ReadOnlyField(source='owner.email')
