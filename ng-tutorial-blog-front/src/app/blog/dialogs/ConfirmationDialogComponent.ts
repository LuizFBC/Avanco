import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {not} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h1 mat-dialog-title>Confirm your action</h1>
    <div>
    <p>Are you sure?</p>
    <\div>
    <div mat-dialog-action>

      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button
      type="buttom"
      (click)="submit()"
      color="warn">
      Continue
      </button>

    </div>`
})

export class ConfirmationDialogComponent {
  constructor(private dialogRef: MatDialogRef<void>) {
  }
  public submit(){
    this.dialogRef.close(true);

  }
}
