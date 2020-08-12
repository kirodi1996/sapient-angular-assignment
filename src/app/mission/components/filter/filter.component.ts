import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { LAUNCH_YEAR, LANDING_FILTER, FILTER_TYPE } from '../../models/filter';
import { FilterService } from '../../services/filter.service';
import { FilterType } from '../../models/selected-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  launchYearFilters: Array<string> = LAUNCH_YEAR;
  landingFilters: Array<boolean> = LANDING_FILTER;
  selectedLaunchYear: any;
  selectedLuanchSuccess: any;
  selectedLandingSuccess: any;
  @Output()
  filtersChange: EventEmitter<Array<FilterType>> = new EventEmitter();

  constructor(
    private filterService: FilterService) { }

  ngOnInit() {
  }

  filterSelect(selectedFilter: string, type) {
    switch (type) {
      case FILTER_TYPE.launchYear:
        this.selectedLaunchYear = selectedFilter;
        break;
      case FILTER_TYPE.launchSuccess:
        this.selectedLuanchSuccess = selectedFilter;
        break;
      case FILTER_TYPE.landingSuccess:
        this.selectedLandingSuccess = selectedFilter;
        break;
      default:
        break;
    }
    this.filterService.handleSelectedFilters(selectedFilter, type);
    this.filtersChange.emit();
  }

}
