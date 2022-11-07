import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { mockvideos } from 'src/assets/mockdata';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  getvideos: any = [];

  constructor(private videoService: APIService) {}

  ngOnInit(): void {
    this.getvideos = mockvideos;
    this.getVideos();
  }

  getVideos() {
    const param = { location: 'US' };
    this.videoService.getVideos(param).subscribe(
      (res: any) => {
        if (res.data.length > 5) {
          this.getvideos = [];
          for (let i = 0; i < 5; i++) {
            const element = res.data[i];
            this.getvideos.push(element);
          }
        }
      },
      (error) => {
        console.log('error: ', error);
        this.getvideos = mockvideos;
      }
    );
  }

  adjustNumbers(number: any) {
    var parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}
