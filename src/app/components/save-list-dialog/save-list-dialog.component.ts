import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-save-list-dialog',
  templateUrl: './save-list-dialog.component.html',
  styleUrls: ['./save-list-dialog.component.scss']
})
export class SaveListDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SaveListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
