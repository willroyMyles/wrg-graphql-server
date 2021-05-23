import { PrismaClient } from ".prisma/client";
import { OutgoingListOfConvo } from "src/conversation/dto/outogingListOfConvos";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { CreateUserInfoArgs } from "src/user-info/dto/userInfo.dto";
import { DataBase } from "./databseBase";

export class UserInfoDataBase extends DataBase{
    async getConversationsByUserinfo(id: string) {
     
        try{
            var convos = await this.prisma.userInfo.findUnique({where:{id:id}, select:{
                id:true,
                
                incomings:{
                    select : {
                        comment : true,
                        post : true,
                        messages : true,
                        sender : true,
                        reciever: true
                    }
                }, 
                outgoings:{
                    select : {
                        comment : true,
                        post : true,
                        messages : true,
                        sender : true,
                        reciever: true
                    }
                }, 
            }})

            return [...convos.incomings, ...convos.outgoings];
        }catch(e){
            console.log(e);
            return e;
        }
    }

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