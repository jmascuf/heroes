import { stringify } from '@angular/compiler/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/interfaces/hero';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

    this.hero = this.heroService.find(id)!;
    console.log(this.hero);
    this.form.addControl('name', new FormControl(this.hero.name))
    this.form.addControl('description', new FormControl(this.hero.description))

  }

  save() {
    this.hero.name = this.form.controls['name'].value
    this.hero.description = this.form.controls['description'].value
    this.heroService.update(this.hero);
    this.router.navigate([''])

  }

  delete() {
    this.heroService.delete(this.hero.id);
    this.router.navigate([''])
  }

  deleteDialog() {
    const dialogRef = this.dialog.open(DeleteHeroDialog, {
      width: '250px',
      data: { name: this.hero.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result)
        this.delete()
    });
  }
}

export interface DialogData {
  name: string;
}

@Component({
  selector: 'delele-hero-dialog',
  templateUrl: './delete-hero-dialog.html',
})
export class DeleteHeroDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteHeroDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    console.log('delete');
    this.dialogRef.close(true)
  }
}