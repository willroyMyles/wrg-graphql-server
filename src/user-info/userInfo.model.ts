import { Field, ObjectType } from "@nestjs/graphql"
import { BaseModel } from "src/base/model"
import { Conversation } from "src/conversation/entities/conversation.entity"
import { Post } from "src/post/post.model"


@ObjectType()
export class UserInfo extends BaseModel{

    @Field({nullable:true})
    username :String
    @Field({nullable:true})
    userImageUrl: String
    @Field({nullable:true})
    userId :String
    @Field({nullable:true})
    email: String
    @Field({nullable:true})
    alias: String
    @Field(()=> [Post], {nullable : false})
    posts : Post[]
    @Field(()=> [Conversation], {nullable : "itemsAndList"})
    incomings : Conversation[]
    @Field(()=> [Conversation], {nullable : "itemsAndList"})
    outgoings : Conversation[]
    
}