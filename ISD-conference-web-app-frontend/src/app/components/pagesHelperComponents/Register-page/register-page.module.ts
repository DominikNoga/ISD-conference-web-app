import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TicketComponent } from './ticket/ticket.component';
import { AboutTheTicketsComponent } from './about-the-tickets/about-the-tickets.component';
import { SideBarOrganizerComponent } from './side-bar-organizer/side-bar-organizer.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';

@NgModule({
    declarations: [
        TicketComponent,
        AboutTheTicketsComponent,
        SideBarOrganizerComponent,
        AddbuttonComponent
    ],
    exports: [
        TicketComponent,
        AboutTheTicketsComponent,
        SideBarOrganizerComponent,
        AddbuttonComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class RegisterPageComponents { };