import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationResolver } from './conversation.resolver';
import { ConversationDatabase } from 'src/database/database.conversation';

@Module({
  providers: [ConversationResolver, ConversationService, ConversationDatabase]
})
export class ConversationModule {}
