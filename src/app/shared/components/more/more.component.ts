import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MoreService } from '../../services/more.service';
import { ExperienceCard } from '../../../core/interfaces/experience-card.interface';
import { MoreMenuCard } from '../../interfaces/more-menu-card.interface';

@Component({
    selector: 'shared-more',
    templateUrl: './more.component.html',
    styleUrl: './more.component.scss',
    standalone: false
})
export class MoreComponent implements OnInit {

  public isMoreMenuOpen: boolean = false;

  public menuContent: MoreMenuCard | null = null;

  constructor(private MoreService: MoreService) { }

  ngOnInit(): void {
    this.MoreService.isMoreMenuOpen$.subscribe(isOpen => this.isMoreMenuOpen = isOpen);
    this.MoreService.menuContent$.subscribe(content => this.menuContent = content);
  }

  onCloseMoreMenu(): void {
    this.MoreService.closeMoreMenu();
  }


  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.isMoreMenuOpen) {
      return;
    }
    const targetElement = event.target as HTMLElement;
    if (targetElement.closest('.overlay')) {
      this.onCloseMoreMenu();
    }
  }

}
