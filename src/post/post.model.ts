import { Field, ObjectType } from "@nestjs/graphql";
import { UserInfo } from "src/user-info/userInfo.model";


@ObjectType()
export class Post{
    @Field({nullable: true})
    id : String
    @Field({nullable: true})
    title: String
    @Field({nullable: true})
    content: String
    @Field({nullable: true})
    category: String
    @Field({nullable: true})
    subCategory: String
    @Field({nullable: true})
    make: String
    @Field({nullable: true})
    model: String
    @Field({nullable: true})
    year : number
    @Field({nullable: true})
    views : number
    @Field(type => UserInfo)
    userInfo : UserInfo
    @Field({nullable : true})
    username  : String
    @Field({nullable : true})
    userId  : String
    @Field({nullable : true})
    userImageUrl  : String
}