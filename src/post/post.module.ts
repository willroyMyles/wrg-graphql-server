import { Module } from "@nestjs/common";
import { PostDatabase } from "src/database/database.post";
import { PostService } from "./post.service";
import { PostResolver } from "./post.resolver";


@Module({
    providers : [PostService, PostDatabase, PostResolver]
})
export default class PostModule{}