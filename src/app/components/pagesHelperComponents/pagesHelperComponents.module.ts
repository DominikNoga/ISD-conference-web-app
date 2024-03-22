import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HistoryPageComponents } from "./history-page/history-page.module";
import { HomePageComponents } from "./home-page/home-page.module";
import { UiComponentsModule } from "../isd-ui/components.module";

@NgModule({
    declarations: [
    ],
    exports: [
        HistoryPageComponents,
        HomePageComponents
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        HistoryPageComponents,
        HomePageComponents,
        UiComponentsModule
    ]
})
export class PagesHelperCompnentsModule {};
