import { Injectable } from "@nestjs/common";
import { PostDatabase } from "src/database/database.post";
import { UserInfo } from "src/user-info/userInfo.model";
import { CreatePostArgs } from "./dto/post.dto";
import { Post } from "./post.model";


@Injectable()
export class PostService{
    resolveCommentField(parent: Post): Comment {
        console.log("this is parent", parent);
        
         const c : Comment = parent["comment"];
         return c;
    }
    async getCommentsByPostId(postId: string) {
        var ans = await this.db.getCommentsByPostId(postId);
    return ans;
    }
    getUserInfoFromPost(parent: Post): any {
        const ui : UserInfo = parent["UserInfo"];        
        return ui
    }
    async createPost(input: CreatePostArgs) {
        return this.db.create(input, new Post());
    }

    constructor(private db : PostDatabase){}
    
    async getPosts(){
        return await this.db.getPosts();
    }
}