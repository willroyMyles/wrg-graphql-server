import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserInfo } from "src/user-info/userInfo.model";
import {Comment} from 'src/comment/entities/comment.entity'
import { BaseModel } from "src/base/model";


@ObjectType()
export class Post extends BaseModel{

    @Field({nullable: true})
    title: String
    @Field({nullable: true})
    content: String
    @Field({nullable: true})
    category: String

    @Field({nullable: true})
    make: String
    @Field({nullable: true})
    model: String
    @Field(()=> Int, {nullable: true})
    year : number
    @Field(()=> Int, {nullable: true})
    views : number
    @Field(type => UserInfo)
    userInfo : UserInfo
    @Field({nullable : true})
    username  : String
    @Field({nullable : true})
    userId  : String
    @Field({nullable : true})
    userImageUrl  : String
    @Field(() => [Comment])
    comments : Comment[]
}