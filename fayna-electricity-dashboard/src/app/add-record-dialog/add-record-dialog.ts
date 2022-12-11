import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'add-record-dialog',
    templateUrl: 'add-record-dialog.html',
  })
  export class AddRecordDialog {
    constructor(public dialogRef: MatDialogRef<AddRecordDialog>) {}
  }