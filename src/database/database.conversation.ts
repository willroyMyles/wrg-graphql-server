import { identity } from "rxjs";
import { AddMessageToConversationInput } from "src/conversation/dto/create-conversation.input";
import { DataBase } from "./databseBase";

export class ConversationDatabase extends DataBase{
  async addMessageToConversation(input: AddMessageToConversationInput) {
    try{
        var msg = await this.prismaBase.messages.create({data : {
            conversationId : input.id,
            content:input.message.content,
            sender : input.message.sender,
            
        }})
        
        this.modifyNewMessage(input.id, input.newMessage);
        return true;

    }catch(e){
        console.log(e);
        return false;
    }
  }

  async modifyNewMessage(id : string, data : any){
    try{
        var res = await this.prismaBase.conversation.update({where:{id:id}, data:{newMessage : data}});
        if(res) return true;
        else return false;
    }catch(e){
        console.log(e);
        return false;
    }
  }

}