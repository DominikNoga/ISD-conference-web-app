import { NgModule } from "@angular/core";
import { PastConferencesListComponent } from "./past-conferences-list/past-conferences-list.component";
import { PastConferenceTileComponent } from "./past-conference-tile/past-conference-tile.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UiComponentsModule } from "../../isd-ui/components.module";

@NgModule({
    declarations: [
        PastConferencesListComponent,
        PastConferenceTileComponent
    ],
    exports: [
        PastConferencesListComponent,
        PastConferenceTileComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        UiComponentsModule
    ]
})
export class HistoryPageComponents { };
