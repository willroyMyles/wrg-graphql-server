import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateMessageInput } from 'src/message/dto/create-message.input';
import { UserInfo } from 'src/user-info/userInfo.model';

@InputType()
export class CreateConversationInput {
  @Field({nullable:true})
  locked     : boolean    
  @Field({nullable:true})
  userInfoId : string
  @Field({nullable:true})
  senderId : string
  @Field({nullable:true})
  recieverId : string
  @Field({nullable:true})
  commentId  : string
  @Field({nullable:true})
  postId     : string
  @Field(()=> [CreateMessageInput], {nullable: "itemsAndList"})
  messages : CreateMessageInput[]

}

@InputType()
export class AddMessageToConversationInput{
  @Field({nullable:false})
  id : string
  @Field(()=>CreateMessageInput, {nullable:false})
  message : CreateMessageInput
  @Field({nullable:false})
  newMessage : string
}
