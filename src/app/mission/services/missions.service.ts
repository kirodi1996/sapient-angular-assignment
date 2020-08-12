import { Injectable } from '@angular/core';
import { environment }  from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Mission } from '../models/mission';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  pageNumber: number = 1;
  characters: Array<Mission> = [];

  constructor(private http: HttpClient, private filterService: FilterService) { }

  getMissions(): Observable<any> {
    const selectedFilters = this.filterService.selectedFilters;
 
    let params = new HttpParams()
      .set('limit', '100');
    for (const filter of selectedFilters) {
      params = params.set(filter.type, filter.value);
    }
    return this.http
      .get<any>(`${environment.apiEndPoint}/v3/launches`, { params })
  }
}
