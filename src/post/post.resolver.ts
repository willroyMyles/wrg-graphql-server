import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { UserInfo } from "src/user-info/userInfo.model";
import { CreatePostArgs } from "./dto/post.dto";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import {Comment} from 'src/comment/entities/comment.entity'


@Resolver(() => Post)
export class PostResolver{

    constructor(private service : PostService){}

    @Query(()=> Post)
    async getPostById(){
        return null;
    }


    @Query(()=> [Post])
    async getPosts(){
        var ans = await this.service.getPosts();
        return ans;
        
    }

    @ResolveField("userInfo", () => UserInfo)
    async userInfo(
        @Parent() parent : Post,
        ){
             const ui : UserInfo= this.service.getUserInfoFromPost(parent);
            return ui;
        }

        @Query(()=> [Comment])
  async getCommentsByPostId(@Args("postId") postId : string){
      var ans = await this.service.getCommentsByPostId(postId);      
      return ans;
  }

  @ResolveField("comments",()=> Comment)
  async comments(@Parent() parent : Post){
    const c = this.service.resolveCommentField(parent);
    return c;
  }
    
    @Mutation(()=> Post, {description : "creates a post"})
    async createPost(@Args("input") input : CreatePostArgs){
        var ans = await this.service.createPost(input);
        
        return ans;
    }
}