import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserInfoModule from './user-info/userInfo.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true
    }),
    UserInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
