import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { CallForPapersPageComponent } from './call-for-papers-page/call-for-papers-page.component';
import { TracksPageComponent } from './tracks-page/tracks-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { CommitteesPageComponent } from './committees-page/committees-page.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    HomePageComponent,
    CallForPapersPageComponent,
    TracksPageComponent,
    RegisterPageComponent,
    HistoryPageComponent,
    CommitteesPageComponent,
    LocationPageComponent,
  ],
  exports: [
    HomePageComponent,
    CallForPapersPageComponent,
    TracksPageComponent,
    RegisterPageComponent,
    HistoryPageComponent,
    CommitteesPageComponent,
    LocationPageComponent
  ]
})
export class PagesModule { }
