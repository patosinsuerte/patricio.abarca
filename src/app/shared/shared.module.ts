import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MoreComponent } from './components/more/more.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    MoreComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, MoreComponent, FooterComponent]
})
export class SharedModule { }
