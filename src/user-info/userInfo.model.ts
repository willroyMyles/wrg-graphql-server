import { Field, ObjectType } from "@nestjs/graphql"
import { BaseModel } from "src/base/model"


@ObjectType()
export class UserInfo implements BaseModel{
    @Field({nullable: true})
    id: String
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
}