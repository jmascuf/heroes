import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    this.dialogRef.close(true)
  }
}