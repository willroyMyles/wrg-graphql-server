import { Post } from "src/post/post.model";
import { DataBase } from "./databseBase";


export class PostDatabase extends DataBase{
     async getCommentsByPostId(postId: string) {
        try{

            var ans = await this.prismaBase.post.findFirst({where : {id : postId}, select : {comments : true}})
    
            return ans.comments;
            
        }catch(err){
            console.log(err);
            return [];
            
        }
     }

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