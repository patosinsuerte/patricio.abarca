import { Component } from '@angular/core';
import { MoreService } from '../../../shared/services/more.service';
import { MoreMenuCard } from '../../../shared/interfaces/more-menu-card.interface';

@Component({
    selector: 'core-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    standalone: false
})
export class ProjectsComponent {
  constructor(private moreService: MoreService) { }


  onToggleMoreMenu(content: MoreMenuCard): void {
    this.moreService.openMoreMenu(content);
  }



}
