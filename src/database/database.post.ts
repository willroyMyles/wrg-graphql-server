import { Post } from "src/post/post.model";
import { DataBase } from "./databseBase";


export class PostDatabase extends DataBase{

     public async getPosts(){
        try{
            var posts = await this.prismaBase.post.findMany({take : 20, include : {
                UserInfo : true
            }});
            
            return posts;
        }catch(e){
            return [];
        }
    }
}