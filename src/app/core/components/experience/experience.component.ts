import { Component, OnInit } from '@angular/core';
import { MoreService } from '../../../shared/services/more.service';
import { ExperienceCard } from '../../interfaces/experience-card.interface';
import { MoreMenuCard } from '../../../shared/interfaces/more-menu-card.interface';

@Component({
  selector: 'core-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {




  constructor(private moreService: MoreService) { }


  onToggleMoreMenu(content: MoreMenuCard): void {
    this.moreService.openMoreMenu(content);
  }


}
