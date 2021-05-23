import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { MessageResolver } from './message/message.resolver';
import { MessageModule } from './message/message.module';
import { ConversationModule } from './conversation/conversation.module';
import PostModule from './post/post.module';
import UserInfoModule from './user-info/userInfo.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true
    }),
    UserInfoModule,
    PostModule,
    CommentModule,
    MessageModule,
    ConversationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
