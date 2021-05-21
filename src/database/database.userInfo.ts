import { PrismaClient } from ".prisma/client";
import { CreateUserInfoArgs } from "src/user-info/dto/userInfo.dto";
import { DataBase } from "./databseBase";

export class UserInfoDataBase extends DataBase{

    prisma = new PrismaClient();

    getuserInfoByEmail = async (email : string ) => 
     {   try{
            var user = await this.prisma.userInfo.findFirst({where : {email : email }});
            if(!user) throw "no user found"
            return user;
        }catch(e){
            return e;
        }
}
  

}