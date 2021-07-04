import { Injectable } from '@angular/core';
import { Hero } from '../shared/interfaces/hero';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes:Hero[];
  constructor(
    private http: HttpClient
  ) { 
    this.heroes = [];
   }

  all() {
    return this.http.get<any>('api/heroes')
      .pipe(map(heroes => { this.heroes = heroes; return heroes }))
      
  }

  filter(search: string){
    return this.http.post<any>('api/heroes', search).pipe(
      map(heroes => { this.heroes = heroes; return heroes }) 
    )
  }

  find(id: number) {
    return this.http.get<any>(`api/heroes/` + id)
    .pipe(map(hero => {
      return hero;
    }));
  }

  add(hero: Hero) {
    let id = this.getNewId()
    hero.id = id;

    return this.http.post<Hero>(`api/heroes/create`, hero)
      .pipe(map(res => {
        return res;
      }));
  }

  update(hero: Hero) {
    return this.http.post<Hero>(`api/heroes/update`, hero)
    .pipe(map(res => {
      return res;
    }));

  }

  delete(id: number) {
    let index = null;
    for (let i = 0; i < this.heroes.length && !index; i++) {
      if (this.heroes[i].id == id) {
        index = i;
        this.heroes.splice(index, 1);
      }
    }

    return this.http.delete<Hero>(`api/heroes/` + id)
    .pipe(map(hero => {
      return hero;
    }));
    
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
