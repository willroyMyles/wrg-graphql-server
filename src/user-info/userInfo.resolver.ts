import { Args, Mutation, Resolver, Query, ResolveField, Parent } from "@nestjs/graphql";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { CreateUserInfoArgs } from "./dto/userInfo.dto";
import { UserInfo } from "./userInfo.model";
import { UserInfoService } from "./userInfo.service";

@Resolver(()=>UserInfo)
export class UserInfoResolver{

    constructor(private service : UserInfoService){}

    @Mutation(() => UserInfo, {description : "Returns a newly created user info"})
    public async createUserInfo(@Args("input") input : CreateUserInfoArgs){
        var ans =  await this.service.create(input);
        return ans;
    }

    @Query(()=> UserInfo, {nullable : true})
    public async getUserInfoByEmail(@Args("input") input : string){
        var ans =  await this.service.getUserinfoByEmail(input);
        return ans;
    }

    @Query(()=> [Conversation])
    async getConversationsByUserInfo(@Args("id") id : string){
        var ans : Conversation[] = await this.service.getConversationsByUserId(id);
        console.log("this is ans",ans);
        
        return ans;
    }

    @ResolveField("conversation", ()=> Conversation)
    async conversation(@Parent() parent : UserInfo){
        var ans = this.service.resolveConversation(parent);
        return ans;
    }

}