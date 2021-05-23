import { DataBase } from "./databseBase";

export class CommentDatabase extends DataBase{


  async getCommentsByPostId(postId: string) {
    try{

        var ans = await this.prismaBase.post.findFirst({where : {id : postId}, select : {comments : true}})

        return ans.comments;
        
    }catch(err){
        console.log(err);
        return [];
        
    }
  }

}