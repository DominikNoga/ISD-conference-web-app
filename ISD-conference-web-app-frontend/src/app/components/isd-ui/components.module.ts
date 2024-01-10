import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TracksListComponent } from './home-page/tracks-list/tracks-list.component';
import { TracksListItemComponent } from './home-page/tracks-list-item/tracks-list-item.component';
import { ConferenceTimelineComponent } from './home-page/conference-timeline/conference-timeline.component';
import { SuportersListComponent } from './home-page/suporters-list/suporters-list.component';
import { SectionComponent } from './section/section.component';
import { TwittsListComponent } from './home-page/twitts-list/twitts-list.component';
import { SectionHeaderComponent } from './section-header/section-header.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavComponent,
        HeaderComponent,
        ParagraphComponent,
        TracksListComponent,
        TracksListItemComponent,
        ConferenceTimelineComponent,
        SuportersListComponent,
        SectionComponent,
        TwittsListComponent,
        SectionHeaderComponent,
    ],
    exports: [
        FooterComponent,
        NavComponent,
        HeaderComponent,
        TracksListComponent,
        ParagraphComponent,
        SectionComponent,
        TwittsListComponent,
        SectionHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ]
})
export class ComponentsModule {};
