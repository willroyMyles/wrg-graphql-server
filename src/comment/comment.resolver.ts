import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.dto';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment)
  async createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput) {
    return await this.commentService.create(createCommentInput);
  }

  

  @Query(() => [Comment], { name: 'comment' })
  async findAll() {
    return this.commentService.findAll();
  }

  @Query(() => Comment, { name: 'comment' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Comment)
  async updateComment(@Args('updateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentService.update(updateCommentInput.id, updateCommentInput);
  }

  @Mutation(() => Comment)
  async removeComment(@Args('id', { type: () => Int }) id: number) {
    return this.commentService.remove(id);
  }
}
