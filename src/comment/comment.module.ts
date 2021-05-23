import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { CommentDatabase } from 'src/database/database.comment';

@Module({
  providers: [CommentResolver, CommentService, CommentDatabase]
})
export class CommentModule {}
