import { Injectable } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { Observable, of } from 'rxjs';
import { Hero } from '../shared/interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[];
  constructor(
  ) {

    this.heroes = [{ name: 'local hero', id: 1 }, { name: 'western hero', id: 2 }]

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
    for (let i = 0; i <= this.heroes.length; i++) {
      if (this.heroes[i].id == id) {
        this.heroes.splice(i, 1);
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
