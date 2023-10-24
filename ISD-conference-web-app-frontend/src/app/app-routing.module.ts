import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CallForPapersPageComponent } from './pages/call-for-papers-page/call-for-papers-page.component';
import { CommitteesPageComponent } from './pages/committees-page/committees-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'call-for-papers', component: CallForPapersPageComponent},
  { path: 'committees', component: CommitteesPageComponent},
  { path: 'history', component: HistoryPageComponent},
  { path: 'location', component: LocationPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'tracks', component: TracksPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
