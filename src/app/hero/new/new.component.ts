import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/interfaces/hero';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  hero: Hero = { name: '', id: 0 };
  
  form = new FormGroup({});
  routeId:number = 0;

  constructor(
    private router: Router,
    private _heroService: HeroService,
  ) {  }

  ngOnInit(): void {
    this.form.addControl('name', new FormControl(this.hero.name))
  }


  add() {
    this.hero.name = this.form.controls['name'].value
    this._heroService.add(this.hero)
    this.router.navigate([''])

  }


}
