import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { mockactivities } from 'src/assets/mockdata';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  getActivities: any = [];

  constructor(private videoService: APIService) {}

  ngOnInit(): void {
    this.getActivities = mockactivities;
    this.getActivityAPI();
  }

  getActivityAPI() {
    const param = { id: '6gZwKexA3_Q' };
    this.videoService.getVideosComment(param).subscribe(
      (res: any) => {
        if (res.data.length > 5) {
          this.getActivities = [];
          for (let i = 0; i < 10; i++) {
            const element = res.data[i];
            this.getActivities.push(element);
          }
        }
      },
      (error) => {
        console.log('error: ', error);
        this.getActivities = mockactivities;
      }
    );
  }
}
