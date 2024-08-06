import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExperienceCard } from '../../core/interfaces/experience-card.interface';
import { MoreMenuCard } from '../interfaces/more-menu-card.interface';

@Injectable({
  providedIn: 'root'
})
export class MoreService {

  private isMoreMenuOpen = new BehaviorSubject<boolean>(false);
  private menuContent = new BehaviorSubject<MoreMenuCard | null>(null);

  constructor() { }

  isMoreMenuOpen$ = this.isMoreMenuOpen.asObservable();
  menuContent$ = this.menuContent.asObservable();


  // Método para abrir o cerrar el navbar
  toggleMoreMenu(): void {
    this.isMoreMenuOpen.next(!this.isMoreMenuOpen.value);
  }

  // Método para abrir el navbar
  openMoreMenu(content: MoreMenuCard): void {
    this.menuContent.next(content);
    this.isMoreMenuOpen.next(true);
  }

  // Método para cerrar el navbar
  closeMoreMenu(): void {
    this.isMoreMenuOpen.next(false);
  }


}
