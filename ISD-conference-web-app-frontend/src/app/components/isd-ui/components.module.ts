import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FooterComponent,
        NavComponent,
        HeaderComponent,
    ],
    exports: [
        FooterComponent,
        NavComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ComponentsModule {};
