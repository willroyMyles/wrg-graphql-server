import { Injectable } from '@nestjs/common';
import { CommentDatabase } from 'src/database/database.comment';
import { CreateCommentInput } from './dto/create-comment.dto';
import { UpdateCommentInput } from './dto/update-comment.input';
import {Comment} from 'src/comment/entities/comment.entity'

@Injectable()
export class CommentService {
  resolveCommentField(parent: Comment) {
    const comment : Comment = parent;    
    return comment;
  }
  async getCommentsByPostId(postId: string) {
    var ans = await this.db.getCommentsByPostId(postId);
    return ans;
  }

  constructor(private db : CommentDatabase){}

  async create(createCommentInput: CreateCommentInput) {    
    var ans =  await this.db.create(createCommentInput, new Comment());
    return ans;
    
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
