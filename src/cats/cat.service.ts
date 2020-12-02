import { Injectable } from '@nestjs/common';
import { Cat } from './cat';

@Injectable()
export class CatService {
  cats: Cat[] = [
    { id: 1, name: 'Biscoito' },
    { id: 2, name: 'Pimpolho' },
    { id: 3, name: 'Bilbo' },
    { id: 4, name: 'Yoda' },
    { id: 5, name: 'Spock' },
    { id: 6, name: 'Sherlock' },
    { id: 7, name: 'Frodo' },
    { id: 8, name: 'Elvis' },
  ];

  getAll() {
    return this.cats;
  }

  getById(id: number) {
    return this.cats.find((value) => value.id == id);
  }

  store(cat: Cat) {
    let lastId = 0;

    if (this.cats.length > 0) {
      lastId = this.cats[this.cats.length - 1].id;
    }

    cat.id = lastId + 1;

    this.cats.push(cat);

    return cat;
  }

  update(cat: Cat) {
    const catFound = this.cats.find((value) => value.id == cat.id);

    if (catFound) {
      catFound.name = cat.name;
    }

    return catFound;
  }

  delete(id: number) {
    const index = this.cats.findIndex((value) => value.id == id);

    this.cats.splice(index, 1);

    return true;
  }
}
