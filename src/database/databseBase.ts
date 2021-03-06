import { PrismaClient } from ".prisma/client";
import { Res } from "@nestjs/common";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { BaseModel } from "src/base/model";
import { Post } from "src/post/post.model";
import { UserInfo } from "src/user-info/userInfo.model";
import {Comment} from 'src/comment/entities/comment.entity'
import { CreateCommentInput } from "src/comment/dto/create-comment.dto";
import { Conversation } from "src/conversation/entities/conversation.entity";
import { CreateConversationInput } from "src/conversation/dto/create-conversation.input";
import { CreateMessageInput } from "src/message/dto/create-message.input";

export class DataBase{
    protected prismaBase = new PrismaClient();


    create = async (obj : any, type : BaseModel) => 
       { 
           
           
           try{
            var ans : any;

            
            debugger
            switch(true){
                case type instanceof UserInfo : 
                ans = await  this.prismaBase.userInfo.create({data : obj});
                break;
                case type instanceof Post : 
                ans = await  this.prismaBase.post.create({data : obj});
                break;
                case type instanceof Conversation : 
                var cast : CreateConversationInput = obj;
                var msg :CreateMessageInput = cast.messages[0];
                var msgC = await this.prismaBase.messages.create({data:msg});
                ans = await  this.prismaBase.conversation.create({data : {
                    userInfoId : cast.userInfoId,
                    locked : cast.locked,
                    recieverId : cast.recieverId,
                    senderId: cast.senderId,
                    commentId : cast.commentId,
                    messages : {connect : [{id:msgC.id}]}
                } })

                
                break;
                case type instanceof Comment :                 
                
                ans = await  this.prismaBase.comment.create({data : {
                    postId : obj["postId"],
                    isOffer : obj["isOffer"],
                    userImageUrl : obj["userImageUrl"],
                    username : obj["username"],
                    userId : obj["userId"],
                    content : obj["content"],

                }});
                break;
            }
            console.log("at db", ans);
            
            return ans;
        }catch(e){
            console.log(e);
            
            return "could not get object";
        }
    }

    delete = async (obj : any) => new Promise( async (res, rej) =>{
        try{
            
            var ans : any;
            switch(typeof obj){
                case typeof UserInfo : 
                ans = await  this.prismaBase.userInfo.delete({where : {id : obj.id}});
                break;
            }
    
            return res(ans);
        }catch(e){
            return rej("could not get object");
        }
    })

    update = (obj : any)=> new Promise( async (res, rej) =>{
        try{
            
            var ans : any;
            switch(typeof obj){
                case typeof UserInfo : 
                ans = await  this.prismaBase.userInfo.update({where: {id : obj.id}, data : obj});
                break;
            }
    
            return res(ans);
        }catch(e){
            return rej("could not get object");
        }
    })

    findById = (obj : any)=> new Promise( async (res, rej) =>{
        try{
            
            var ans : any;
            switch(typeof obj){
                case typeof UserInfo : 
                ans = await  this.prismaBase.userInfo.findUnique({where:{id : obj.id}});
                break;
            }
            return res(ans);
        }catch(e){
            return rej("could not get object");
        }
    })


}