import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatService } from './cat.service';
import { CatsController } from './cat.controller';
import { Cat } from './cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatService],
  controllers: [CatsController],
})
export class CatsModule {}
