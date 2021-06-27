import { Injectable } from '@angular/core';
import { Hero } from '../shared/interfaces/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[];
  constructor(
  ) {
    this.heroes = HEROES;
  }

  all() {
    return this.heroes;
  }

  add(obj: Hero) {
    let id = this.getNewId()
    obj.id = id;
    this.heroes.push(obj)
  }

  find(id: number): Hero | undefined {
    return this.heroes.find(element => element.id == id)
  }

  update(hero: Hero):void {

    for (const iterator of this.heroes) {
      if (iterator.id == hero.id){
        iterator.name = hero.name;
        break
      }
      
    }
  }

  delete(id: number) {
    let index = null;
    for (let i = 0; i < this.heroes.length && !index; i++) {
      if (this.heroes[i].id == id) {
        index = i;
        this.heroes.splice(index, 1);
      }
    }
  }

  getNewId(): number {
    let n = 1;
    for (let h of this.heroes) {
      if (this.heroes.find(x => x.id == n)) {
        n++
      }
    }
    return n
  }


}
