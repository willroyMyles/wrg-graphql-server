import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { UserInfo } from "src/user-info/userInfo.model";
import { CreatePostArgs } from "./dto/post.dto";
import { Post } from "./post.model";
import { PostService } from "./post.service";


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
        // console.log("this is ans", ans);
        return ans;
        
    }

    @ResolveField("userInfo", () => UserInfo)
    async userInfo(
        @Parent() parent : Post,
        ){

            // var ui = new UserInfo();
            // ui = s;
            // ui.alias = parent.userInfo.alias
            // ui.email = email
            // ui.id = id
            // ui.userId = userId
            // ui.userImageUrl = userImageUrl
            // ui.username = username
             const ui : UserInfo= this.service.getUserInfoFromPost(parent);
            return ui;
        }
    
    @Mutation(()=> Post, {description : "creates a post"})
    async createPost(@Args("input") input : CreatePostArgs){
        var ans = await this.service.createPost(input);
        
        return ans;
    }
}