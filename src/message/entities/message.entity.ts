import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "src/base/model";

@ObjectType()
export class Message extends BaseModel {
    @Field({nullable : true})
    content : string
    @Field({nullable : true})
    sender : string
    @Field({nullable : true})
    conversationId : string
}
