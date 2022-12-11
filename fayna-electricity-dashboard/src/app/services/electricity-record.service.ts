import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ElectricityRecordService {
  constructor(
    private httpClient: HttpClient) {
  }

  public getDashboardData(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/dashboard`, { })
  }

  public createRecord(record: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/ElectricitySwitchRecord`, record)
  }
}
