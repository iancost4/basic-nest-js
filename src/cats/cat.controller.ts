import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatService) { }

  @Get()
  async getAll(): Promise<Cat[]> {
    return this.catService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Cat> {
    return this.catService.getById(id);
  }

  @Post()
  async store(@Body() cat: Cat): Promise<Cat> {
    return this.catService.store(cat);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() cat: Cat): Promise<Cat> {
    cat.id = id;
    return this.catService.update(cat);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.catService.delete(id);
  }
}
