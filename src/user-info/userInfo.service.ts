import { Injectable } from "@nestjs/common";
import { UserInfoDataBase } from "src/database/database.userInfo";
import { CreateUserInfoArgs } from "./dto/userInfo.dto";
import { UserInfo } from "./userInfo.model";


@Injectable()
export class UserInfoService{
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