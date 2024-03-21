import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { CallForPapersPageComponent } from './call-for-papers-page/call-for-papers-page.component';
import { TracksPageComponent } from './tracks-page/tracks-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { CommitteesPageComponent } from './committees-page/committees-page.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { VisaRequirementsPageComponent } from './visa-requirements-page/visa-requirements-page.component';
import { TravelInformationPageComponent } from './travel-information-page/travel-information-page.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '../components/isd-ui/components.module';
import { PagesHelperCompnentsModule } from '../components/pagesHelperComponents/pagesHelperComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    UiComponentsModule,
    PagesHelperCompnentsModule
  ],
  declarations: [
    HomePageComponent,
    CallForPapersPageComponent,
    TracksPageComponent,
    RegisterPageComponent,
    HistoryPageComponent,
    CommitteesPageComponent,
    LocationPageComponent,
    VisaRequirementsPageComponent,
    TravelInformationPageComponent
  ],
  exports: [
    HomePageComponent,
    CallForPapersPageComponent,
    TracksPageComponent,
    RegisterPageComponent,
    HistoryPageComponent,
    CommitteesPageComponent,
    LocationPageComponent,
    VisaRequirementsPageComponent,
    TravelInformationPageComponent
  ]
})
export class PagesModule { }
