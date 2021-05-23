import { Injectable } from "@nestjs/common";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { UserInfoDataBase } from "src/database/database.userInfo";
import { CreateUserInfoArgs } from "./dto/userInfo.dto";
import { UserInfo } from "./userInfo.model";


@Injectable()
export class UserInfoService{
    resolveConversation(parent: UserInfo) {
        console.log("this is parent", parent);
        
        var convo : Conversation[] = parent["incomings"];
        if(!convo) convo = parent["outgoings"]
        return convo;
    }
    async getConversationsByUserId(id: string) {
        return await this.db.getConversationsByUserinfo(id);
    }
    constructor(private  db : UserInfoDataBase){}
    dummy = new UserInfo();
    async create(input : CreateUserInfoArgs){
        var ans =  await this.db.create(input, this.dummy);
        return ans;
        
    }

    async getUserinfoByEmail(email : string){
        return await this.db.getuserInfoByEmail(email);
    }


}