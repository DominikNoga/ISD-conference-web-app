import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UiComponentsModule } from "../../isd-ui/components.module";
import { SideNavComponent } from './side-nav/side-nav.component';
import { ChairsListComponent } from './chairs-list/chairs-list.component';
import { ChairsListItemComponent } from './chairs-list-item/chairs-list-item.component';
import { FullTracksListComponent } from './full-tracks-list/full-tracks-list.component';
import { FullTracksListItemComponent } from './full-tracks-list-item/full-tracks-list-item.component';

@NgModule({
    declarations: [
        SideNavComponent,
        ChairsListComponent,
        ChairsListItemComponent,
        FullTracksListComponent,
        FullTracksListItemComponent
    ],
    exports: [
        SideNavComponent,
        ChairsListComponent,
        FullTracksListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        UiComponentsModule
    ]
})
export class CommitteesPageComponents { };
