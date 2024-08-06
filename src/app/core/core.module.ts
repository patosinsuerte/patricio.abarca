import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroComponent,
    AboutComponent,
    MyServicesComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [LayoutPageComponent]
})
export class CoreModule { }
