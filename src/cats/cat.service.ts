import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async getAll() {
    return await this.catsRepository.find();
  }

  async getById(id: number) {
    return await this.catsRepository.findOne(id);
  }

  async store(cat: Cat) {
    return await this.catsRepository.save(cat);
  }

  async update(cat: Cat) {
    const catFound = await this.catsRepository.findOne(cat.id);

    catFound.name = cat.name;

    return await this.catsRepository.save(catFound);
  }

  async delete(id: number) {
    const catFound = await this.catsRepository.findOne(id);

    return await this.catsRepository.remove(catFound);
  }
}
