import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { SwitchType } from "../enums/switch-type";

@Component({
    selector: 'add-record-dialog',
    templateUrl: 'add-record-dialog.html',
  })
  export class AddRecordDialog {
    public switchTypes = [SwitchType.SwitchOff, SwitchType.SwitchOn];
    
    public dateTimeControl = new FormControl<Date | null>(null);
    public switchTypeControl = new FormControl<SwitchType | null>(null);
    public electricityRecord = new FormGroup({
      dateTimeControl: this.dateTimeControl,
      switchTypeControl: this.switchTypeControl
    });
    constructor(public dialogRef: MatDialogRef<AddRecordDialog>) {}
  }