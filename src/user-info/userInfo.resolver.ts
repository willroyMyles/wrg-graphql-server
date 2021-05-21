import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { CreateUserInfoArgs } from "./dto/userInfo.dto";
import { UserInfo } from "./userInfo.model";
import { UserInfoService } from "./userInfo.service";

@Resolver()
export class UserInfoResolver{

    constructor(private service : UserInfoService){}

    @Mutation(() => UserInfo, {description : "Returns a newly created user info"})
    public async createUserInfo(@Args("input") input : CreateUserInfoArgs){
        var ans =  await this.service.create(input);
        console.log(ans)
        return ans;
    }

    @Query(()=> UserInfo, {nullable : true})
    public async getUserInfoByEmail(@Args("input") input : string){
        var ans =  await this.service.getUserinfoByEmail(input);
        console.log(ans);
        return ans;
        
    }

}