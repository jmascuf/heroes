import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { HEROES } from 'src/app/mock-heroes';

import { Observable, of, throwError } from 'rxjs';
import { Hero } from 'src/app/shared/interfaces/hero';



let heroes: Array<Hero> = [...HEROES];


@Injectable()
export class HeroesInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let { url, method, headers, body } = req;

    if (url.endsWith('/heroes') && method === 'GET') {
      return this.getHeroes();
    }

    if (url.endsWith('/heroes/update') && method === 'POST') {
      return this.updateHero(body);
    }

    if (url.endsWith('/heroes/create') && method === 'POST') {
      return this.createHero(body);
    }
   
    if (url.endsWith('/heroes') && method === 'POST') {
      return this.filterHeroes(body);
    }

    if (url.match(/\/heroes\/{0,1}[0-9]{1}/) && method === 'GET') {
      return this.getHeroById(url);
    }
    if (url.match(/\/heroes\/{0,1}[0-9]{1}/) && method === 'DELETE') {
      return this.deleteHero(url);
    }
    console.log('no match');

    return next.handle(req);
  }

  getHeroes() {
    console.log('interceptor.getHeroes()');
    
    return this.ok(heroes);
  }

  createHero(body: Hero) {
    console.log('interceptor.createHero()');
    try {
      const hero = body;
      if (heroes.find(x => x.name === hero.name)) {
        return this.error("Hero exist");
      }
      heroes = [...heroes, hero];
      return this.ok();
    } catch (err) {
      return this.error(err);
    }
  }

  updateHero(body: Hero) {
    console.log('interceptor.update()');
    let hero = body;
    heroes = heroes.map(u => {
      if (u.id == hero.id) {
        u = hero;
      }
      return u;
    });
    return this.ok();
  }

  getHeroById(url: string) {
    console.log('interceptor.findOne()');
    let hero = heroes.find(x => x.id.toString() === this.idFromUrl(url));
    return !!hero ? this.ok(hero) : this.error(`Hero ${hero} not found`);
  }

  deleteHero(url: string) {
    console.log('interceptor.delete()');
    heroes = heroes.filter(x => x.id.toString() !== this.idFromUrl(url));
    return this.ok();
  }

  filterHeroes(body: any) {
    console.log('interceptor.filter()');
    let search = <string>body;
    heroes = heroes.filter(x => x.name.indexOf(search.toLocaleLowerCase()) > 0);

    return this.ok();
  }

  // helper functions

  ok(body?: any) {
    return of(new HttpResponse({ status: 200, body }))
  }

  error(message: any) {
    return throwError({ error: { message } });
  }

  idFromUrl(url: string) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  }

}

