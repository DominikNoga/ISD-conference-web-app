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
import { SupportersListComponent } from './home-page/suporters-list/supporters-list.component';
import { SectionComponent } from './section/section.component';
import { TwittsListComponent } from './home-page/twitts-list/twitts-list.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { CountdownClockComponent } from './home-page/conference-timeline/helper/countdown-clock/countdown-clock.component';
import { TimelineComponent } from './home-page/conference-timeline/helper/timeline/timeline.component';
import { TimelineSingleEventComponent } from './home-page/conference-timeline/helper/timeline-single-event/timeline-single-event.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavDropdownItemComponent } from './nav-dropdown-item/nav-dropdown-item.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavComponent,
        HeaderComponent,
        ParagraphComponent,
        TracksListComponent,
        TracksListItemComponent,
        ConferenceTimelineComponent,
        SupportersListComponent,
        SectionComponent,
        TwittsListComponent,
        SectionHeaderComponent,
        CountdownClockComponent,
        TimelineComponent,
        TimelineSingleEventComponent,
        NavItemComponent,
        NavDropdownItemComponent,
    ],
    exports: [
        FooterComponent,
        NavComponent,
        HeaderComponent,
        TracksListComponent,
        ParagraphComponent,
        SectionComponent,
        TwittsListComponent,
        SectionHeaderComponent,
        SupportersListComponent,
        ConferenceTimelineComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ]
})
export class ComponentsModule {};
