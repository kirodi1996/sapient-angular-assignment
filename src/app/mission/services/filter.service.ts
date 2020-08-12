import { Injectable } from '@angular/core';
import { FilterType } from '../models/selected-filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  selectedFilters: Array<FilterType> = [];

  constructor(
  ) { }

  handleSelectedFilters(selectedFilter, type): void {
    const index = this.selectedFilters.findIndex(obj => obj.type === type);
    const filterType: FilterType = new FilterType();
    filterType.type = type;
    filterType.value = selectedFilter;
    if (index === -1) {
      this.selectedFilters.push(filterType);
    } else {
      this.selectedFilters[index] = filterType;
    }
  }

}
