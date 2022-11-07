import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CoreComponent } from './core/core.component';
import { MainRoutingModule } from './main-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { MatInputModule } from '@angular/material/input';
import { VideosComponent } from './content/videos/videos.component';
import { ActivitiesComponent } from './content/activities/activities.component';
import { PeoplesComponent } from './content/peoples/peoples.component';
import { ChannelsComponent } from './content/channels/channels.component';
import { DocumentsComponent } from './content/documents/documents.component';

@NgModule({
  imports: [MainRoutingModule, CommonModule, MatInputModule, MatSidenavModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    CoreComponent,
    BreadcrumbComponent,
    VideosComponent,
    ActivitiesComponent,
    PeoplesComponent,
    ChannelsComponent,
    DocumentsComponent,
  ],
})
export class MainModule {}
