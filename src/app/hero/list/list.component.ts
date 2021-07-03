import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/interfaces/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes: Hero[] = [];


  searchForm = new FormGroup({
    searchText: new FormControl('')
  })

  constructor(private _heroService: HeroService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.heroes = this._heroService.all();
  }

  goToDetail(id: number) {

    this.router.navigate(['detail/' + id])
  }

  add() {
    this.router.navigate(['new'])
  }

  search() {
    let search = this.searchForm.controls['searchText'].value
    console.log(search);

    this.heroes = this._heroService.all().filter(x => x.name.indexOf(search) >= 0)
  }

}
