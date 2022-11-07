import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { mockchannels } from 'src/assets/mockdata';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
  channels: any = [];

  constructor(private channelService: APIService) {}

  ngOnInit(): void {
    this.channels = mockchannels;
    this.getChannelAPI();
  }

  getChannelAPI() {
    this.channelService.getChannelsAPI().subscribe(
      (res: any) => {
        if (res.data.length > 15) {
          this.channels = [];
          for (let i = 0; i < 15; i++) {
            const element = res.data[i];
            this.channels.push(element);
          }
        }
        // console.log(res);
      },
      (error) => {
        console.log('error: ', error);
        this.channels = mockchannels;
      }
    );
  }
}
