import { PrismaClient } from ".prisma/client";
import { Res } from "@nestjs/common";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { BaseModel } from "src/base/model";
import { UserInfo } from "src/user-info/userInfo.model";

export class DataBase{
    prismaBase = new PrismaClient();


    create = async (obj : any, type : BaseModel) => 
       { try{
            var ans : any;
            debugger
            console.log(type instanceof UserInfo )
            switch(true){
                case type instanceof UserInfo : 
                ans = await  this.prismaBase.userInfo.create({data : obj});
                break;
            }
    
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