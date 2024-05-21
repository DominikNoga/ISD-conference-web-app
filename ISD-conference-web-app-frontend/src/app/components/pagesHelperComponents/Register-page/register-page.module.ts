import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TicketComponent } from './ticket/ticket.component';
import { AboutTheTicketsComponent } from './about-the-tickets/about-the-tickets.component';
import { SideBarOrganizerComponent } from './side-bar-organizer/side-bar-organizer.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
    declarations: [
        TicketComponent,
        AboutTheTicketsComponent,
        SideBarOrganizerComponent,
        AddbuttonComponent,
        TableComponent,
        FormComponent,
        AccordionComponent
    ],
    exports: [
        TicketComponent,
        AboutTheTicketsComponent,
        SideBarOrganizerComponent,
        AddbuttonComponent,
        TableComponent,
        FormComponent,
        AccordionComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class RegisterPageComponents { };