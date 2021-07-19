import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsOptional } from "class-validator";




@InputType()
export class CreateUserInfoArgs{
    @Field({nullable:true})
    @IsOptional({})
    username :String
    @Field({nullable:true})
    @IsOptional({})
    userImageUrl: String
    @Field({nullable:true})
    @IsOptional({})
    userId :String
    @Field({nullable:true})
    @IsOptional({})
    @IsEmail({})
    email: String
    @Field({nullable:true})
    @IsOptional({})
    alias: String
}

@InputType()
export class GetUserInfoByEmailArgs{
    
}

@InputType()
export class AddPostToWatchArgs{
    @Field({nullable:false})
    userId : string
    @Field({nullable:false})
    postId : string
    @Field({nullable:false, defaultValue:true})
    add: boolean
}