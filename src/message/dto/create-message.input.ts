import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field({nullable : true})
    content : string
    @Field({nullable : true})
    sender : string
    @Field(()=> String , {nullable : true})
    conversationId : string
}
