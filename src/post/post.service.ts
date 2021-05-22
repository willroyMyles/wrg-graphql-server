import { Injectable } from "@nestjs/common";
import { PostDatabase } from "src/database/database.post";
import { UserInfo } from "src/user-info/userInfo.model";
import { CreatePostArgs } from "./dto/post.dto";
import { Post } from "./post.model";


@Injectable()
export class PostService{
    getUserInfoFromPost(parent: Post): any {
        const ui : UserInfo = parent["UserInfo"];
        console.log("thi is it", ui);
        
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