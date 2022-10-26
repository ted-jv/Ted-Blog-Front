import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], //여기에 socket i.o 모듈, 인증 모듈 등 만들어서 넣으면 된다.
  controllers: [AppController], // express의 router 역할
  providers: [AppService],
})
export class AppModule {}

console.log('abc');
