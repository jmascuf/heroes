import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/interfaces/hero';

import {DeleteHeroDialog} from './delete-hero-dialog'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hero: Hero = { name: '', id: 0 };

  form = new FormGroup({});
  routeId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.routeId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '1', 10);
    this.getHero(this.routeId);
  }

  getHero(id: number): void {

    this.heroService.find(id).subscribe(res => {
      this.hero = res;
      this.form.addControl('name', new FormControl(this.hero.name))
      this.form.addControl('description', new FormControl(this.hero.description))
    }, err => {
      console.log(err);
    })
    

  }

  save() {
    this.hero.name = this.form.controls['name'].value
    this.hero.description = this.form.controls['description'].value
    this.heroService.update(this.hero).subscribe(res => {
      this.router.navigate([''])
    },
    err => { console.log(err)})
  }

  delete() {
    this.heroService.delete(this.hero.id).subscribe(res => {
      this.router.navigate([''])
    },
    err => { console.log(err)})
  }

  deleteDialog() {
    const dialogRef = this.dialog.open(DeleteHeroDialog, {
      width: '25em',
      data: { name: this.hero.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result)
        this.delete()
    });
  }
}
