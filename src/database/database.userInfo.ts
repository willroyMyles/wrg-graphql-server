import { PrismaClient } from ".prisma/client";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { AddPostToWatchArgs, CreateUserInfoArgs } from "src/user-info/dto/userInfo.dto";
import { DataBase } from "./databseBase";

export class UserInfoDataBase extends DataBase{
    async addPostToWatching(postId: AddPostToWatchArgs) {
        try{
            if(postId.add)
             await this.prismaBase.userInfo.update({where:{id: postId.userId}, data:{watching:{connect: {id:postId.postId}}}});
            else
            await this.prismaBase.userInfo.update({where:{id: postId.userId}, data:{watching:{disconnect:{id:postId.postId}}}});

            return true;
        }catch(e){
            return false;
        }
    }

    async getWatchingByUserifo(id: string){
        try{
            var ans = await this.prismaBase.userInfo.findUnique({where:{id:id}, include:{
                watching : true
            }})

            return ans.watching
        }catch(e){
            return []
        }
    }

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
                        reciever: true,
                        id:true,
                        locked:true,
                        newMessage : true
                    }
                }, 
                outgoings:{
                    select : {
                        comment : true,
                        post : true,
                        messages : true,
                        sender : true,
                        reciever: true,
                        id:true,
                        locked:true,
                        newMessage : true

                    }
                }, 
            }})

            return convos
        }catch(e){
            console.log(e);
            return e;
        }
    }

    prisma = new PrismaClient();

    getuserInfoByEmail = async (email : string ) => 
     {   try{
            var user = await this.prisma.userInfo.findFirst({where : {email : email }, include:{
                watching : true
            }});
            if(!user) throw "no user found"
            return user;
        }catch(e){
            return e;
        }
}
  

}