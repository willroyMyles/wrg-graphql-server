import { Field, ObjectType } from "@nestjs/graphql";
import { Conversation } from "../entities/conversation.entity";

@ObjectType()
export class OutgoingListOfConvo{
    @Field(()=>[], {nullable:"items"})
    list : any[]
    @Field({nullable: false})
    id : string

}