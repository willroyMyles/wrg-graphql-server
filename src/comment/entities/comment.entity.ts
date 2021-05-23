import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/base/model';
import { Post } from 'src/post/post.model';

@ObjectType()
export class Comment extends BaseModel {
  @Field(()=> String, {nullable : true})
  id : String
  @Field(()=> String, {nullable : true})
  content : String
  @Field(()=> String, {nullable : true})
  title : String
  @Field(()=> String, {nullable : true})
  postId : String
  @Field(()=> String, {nullable : true})
  username : String
  @Field(()=> String, {nullable : true})
  userId : String
  @Field(()=> String, {nullable : true})
  userImageUrl : String
  @Field(()=> String, {nullable : true})
  post : Post
  @Field({nullable : true, defaultValue : false})
  isOffer : Boolean
 
  
}
