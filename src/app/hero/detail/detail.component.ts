import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/interfaces/hero';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  hero: Hero;
  routeId:number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _heroService: HeroService,
  ) {
    
    this.hero = { name: '', id: 0 }
    this.routeId = 0;
  }

  ngOnInit(): void {
    this.routeId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '1', 10);
    this.getHero(this.routeId);
  }

  getHero(id:number): void {
    
    this.hero = this._heroService.find(id)!;
      
  }
  goToEdit(){

    this.router.navigate(['edit/'+this.routeId])
  }
}
