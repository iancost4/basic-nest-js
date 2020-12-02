import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cat.controller';
import { CatService } from './cats/cat.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule {}
