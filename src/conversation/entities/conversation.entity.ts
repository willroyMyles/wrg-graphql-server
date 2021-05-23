import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Messages } from '@prisma/client';
import { Message } from 'src/message/entities/message.entity';
import { Post } from 'src/post/post.model';
import { UserInfo } from 'src/user-info/userInfo.model';
import {Comment} from 'src/comment/entities/comment.entity'
import { BaseModel } from 'src/base/model';

@ObjectType()
export class Conversation extends BaseModel{
  @Field({nullable:true})
  locked     : boolean    
  @Field(()=> UserInfo, {nullable:true})
  reciever   : UserInfo
  @Field(()=> UserInfo, {nullable:true})
  sender   : UserInfo
  @Field({nullable:true})
  userInfoId : String
  @Field(()=> Comment, {nullable:true})
  comment    : Comment   
  @Field(()=> Post, {nullable:true})
  post       : Post      
  @Field(()=> [Message], {nullable:true})
  messages   : Messages[]
  @Field({nullable:true})
  commentId  : String
  @Field({nullable:true})
  postId     : String

}
