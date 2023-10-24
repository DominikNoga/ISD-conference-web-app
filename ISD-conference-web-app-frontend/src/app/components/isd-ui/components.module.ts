import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavComponent,
        HeaderComponent
    ],
    exports: [
        FooterComponent,
        NavComponent,
        HeaderComponent
    ]
})
export class ComponentsModule {};
