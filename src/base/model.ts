import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BaseModel{
    @Field(()=> String, {nullable : true, name:"id"})
    id : String
    @Field(()=> Date, {defaultValue : Date.now(), name:"createdAt"})
    createdAt : Date
    
}