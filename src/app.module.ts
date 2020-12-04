import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Cat } from './cats/cat.entity';
import { CatsModule } from './cats/cat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'password',
      database: 'nestjs',
      entities: [Cat],
      synchronize: true,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
