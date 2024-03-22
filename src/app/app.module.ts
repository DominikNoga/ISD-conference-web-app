import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { UiComponentsModule } from './components/isd-ui/components.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PagesHelperCompnentsModule } from './components/pagesHelperComponents/pagesHelperComponents.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    UiComponentsModule,
    PagesHelperCompnentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
