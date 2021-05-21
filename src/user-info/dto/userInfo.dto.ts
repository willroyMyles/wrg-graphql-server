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