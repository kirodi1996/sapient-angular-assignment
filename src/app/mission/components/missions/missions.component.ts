import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../../services/missions.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  missions: Array<Mission> = [];
  currentPage: number = 1;
  totalItems: number;
  loading: boolean = false;

  constructor(
    private missionServices: MissionsService,
  ) {

  }

  ngOnInit() {
    this.getMissions();
  }

  getMissions() {
    this.loading = true;
    this.missionServices.getMissions()
      .subscribe((value) => {
        this.missions = value;
        this.loading = false;
      }, (error) => {
        this.missions = [];
      });
  }

  pageChange(event) {
    this.currentPage = event;
    this.missionServices.pageNumber = this.currentPage;
    this.getMissions();
  }

}
