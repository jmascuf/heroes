import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/interfaces/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes:Hero[] = [];

  constructor(private _heroService:HeroService,
    private router: Router ) { 
    
  }

  ngOnInit(): void {
    this.heroes = this._heroService.all();
  }

  goToDetail(id:number){
    
    this.router.navigate(['detail/'+id])
  }

  add(){
    this.router.navigate(['new'])
  }


}
