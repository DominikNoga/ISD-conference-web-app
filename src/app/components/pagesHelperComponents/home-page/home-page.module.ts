import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ConferenceTimelineComponent } from "./conference-timeline/conference-timeline.component";
import { CountdownClockComponent } from "./countdown-clock/countdown-clock.component";
import { SupportersListComponent } from "./suporters-list/supporters-list.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { TimelineSingleEventComponent } from "./timeline-single-event/timeline-single-event.component";
import { TracksListComponent } from "./tracks-list/tracks-list.component";
import { TracksListItemComponent } from "./tracks-list-item/tracks-list-item.component";
import { TwittsListComponent } from "./twitts-list/twitts-list.component";
import { UiComponentsModule } from "../../isd-ui/components.module";

@NgModule({
    declarations: [
        ConferenceTimelineComponent,
        CountdownClockComponent,
        SupportersListComponent,
        TimelineComponent,
        TimelineSingleEventComponent,
        TracksListComponent,
        TracksListItemComponent,
        TwittsListComponent
    ],
    exports: [
        ConferenceTimelineComponent,
        CountdownClockComponent,
        SupportersListComponent,
        TimelineComponent,
        TimelineSingleEventComponent,
        TracksListComponent,
        TracksListItemComponent,
        TwittsListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        UiComponentsModule
    ]
})
export class HomePageComponents { };
