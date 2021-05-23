import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(()=> String, {nullable : true})
  content : string
  @Field(()=> String, {nullable : true})
  title : string
  @Field(()=> String)
  postId : string
  @Field(()=> String, {nullable : true})
  username : string
  @Field(()=> String, {nullable : true})
  userId : string
  @Field(()=> String, {nullable : false})
  userImageUrl : string
  @Field(()=> Boolean)
  isOffer : boolean
}
