import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRecordDialog } from './add-record-dialog/add-record-dialog';
import { ElectricityRecordService } from './services/electricity-record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private electricityRecordService: ElectricityRecordService,
    public dialog: MatDialog){
      this.dashboardData = {};
  }
  public dashboardData: any;

  ngOnInit(): void {
    this.electricityRecordService.getDashboardData().subscribe(resp => {
      // this.dashboardData
    });
  }

  public addRecord() :void {
    this.dialog.open(AddRecordDialog, {
      width: '250px'
    });
  }
}
