from django.contrib import admin
from .models import UserAccount
from forstaelse.models import Forstaelse
from chat.models import Chat
from rydde_setninger.models import RyddeSetninger
from sets.models import Sets, Saved, Comment, Rating, Completed


class AccountAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'is_staff', 'is_active', 'is_superuser')
    search_fields = ('email', 'name')


class ForstaelseAdmin(admin.ModelAdmin):
    list_display = ('id', 'chat1', 'question1', 'answer1', 'explanation1',
                    'chat2', 'question2', 'answer2', 'explanation2',
                    'chat3', 'question3', 'answer3', 'explanation3')


class ChatAdmin(admin.ModelAdmin):
    list_display = ('id', 'chatquestion1', 'answer11', 'answer12', 'correctanswer1',
                    'chatquestion2', 'answer21', 'answer22', 'correctanswer2',
                    'chatquestion3', 'answer31', 'answer32', 'correctanswer3', 'sendericon', 'receivericon')


class RyddeSetningerAdmin(admin.ModelAdmin):
    list_display = ('id', 'word1', 'wordClass1', 'word2', 'wordClass2', 'word3', 'wordClass3', 'word4', 'wordClass4',
                    'word5', 'wordClass5', 'word6', 'wordClass6', 'word7', 'wordClass7', 'word8', 'wordClass8',
                    'word9', 'wordClass9', 'word10', 'wordClass10')


class SetsAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', 'forstaelse1', 'forstaelse2',
                    'chat1', 'chat2', 'ryddeSetninger1', 'ryddeSetninger2')


class SavedAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', 'sets')


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'sets', 'owner', 'comment', 'name')


class RatingAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', 'sets', 'rating')


class CompletedAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', 'sets')


admin.site.register(UserAccount, AccountAdmin)
admin.site.register(Forstaelse, ForstaelseAdmin)
admin.site.register(Chat, ChatAdmin)
admin.site.register(RyddeSetninger, RyddeSetningerAdmin)
admin.site.register(Sets, SetsAdmin)
admin.site.register(Saved, SavedAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(Completed, CompletedAdmin)
