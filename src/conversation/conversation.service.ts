import { Injectable } from '@nestjs/common';
import { ConversationDatabase } from 'src/database/database.conversation';
import { CreateConversationInput } from './dto/create-conversation.input';
import { UpdateConversationInput } from './dto/update-conversation.input';
import { Conversation } from './entities/conversation.entity';

@Injectable()
export class ConversationService {
  constructor(private db : ConversationDatabase){}
  async create(createConversationInput: CreateConversationInput) {
    return await this.db.create(createConversationInput , new Conversation());
  }

  findAll() {
    return `This action returns all conversation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationInput: UpdateConversationInput) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
