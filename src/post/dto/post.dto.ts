import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreatePostArgs{
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
    @Field({nullable: true})
    year : number
    @Field({nullable: true, defaultValue : 0})
    views : number
    @Field({nullable : false})
    userInfoId : String
}