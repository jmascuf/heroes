import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/interfaces/hero';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hero: Hero = { name: '', id: 0 };
  
  form = new FormGroup({});
  routeId:number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _heroService: HeroService,
  ) {  }

  ngOnInit(): void {
    this.routeId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '1', 10);
    this.getHero(this.routeId);
  }

  getHero(id:number): void {
    
    this.hero = this._heroService.find(id)!;
    console.log(this.hero);
    this.form.addControl('name', new FormControl(this.hero.name))
    this.form.addControl('description', new FormControl(this.hero.description))
    
  }

  save() {
    this.hero.name = this.form.controls['name'].value
    this.hero.description = this.form.controls['description'].value
    this._heroService.update(this.hero);
    this.router.navigate([''])

  }

  delete() {
    this._heroService.delete(this.hero.id);
    this.router.navigate([''])
  }

}
