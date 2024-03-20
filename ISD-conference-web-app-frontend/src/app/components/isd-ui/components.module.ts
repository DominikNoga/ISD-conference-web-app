import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { SectionComponent } from './section/section.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavDropdownItemComponent } from './nav-dropdown-item/nav-dropdown-item.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BurgerNavComponent } from './burger-nav/burger-nav.component';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavComponent,
        HeaderComponent,
        ParagraphComponent,
        SectionComponent,
        SectionHeaderComponent,
        NavItemComponent,
        NavDropdownItemComponent,
        PageHeaderComponent,
        BurgerNavComponent,
        BurgerComponent
    ],
    exports: [
        FooterComponent,
        NavComponent,
        HeaderComponent,
        ParagraphComponent,
        SectionComponent,
        SectionHeaderComponent,
        PageHeaderComponent,
        BurgerComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        BrowserAnimationsModule
    ]
})
export class UiComponentsModule {};
