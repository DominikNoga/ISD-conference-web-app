import { NgModule } from "@angular/core";
import { PastConferencesListComponent } from "./past-conferences-list/past-conferences-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UiComponentsModule } from "../../isd-ui/components.module";
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
    declarations: [
        PastConferencesListComponent,
        CarouselComponent,
    ],
    exports: [
        PastConferencesListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        UiComponentsModule
    ]
})
export class HistoryPageComponents { };
