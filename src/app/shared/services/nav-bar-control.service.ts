import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarControlService {

  private isNavBarOpen = new BehaviorSubject<boolean>(false);
  private isOpacityActive = new BehaviorSubject<boolean>(false);


  // Observable para que otros componentes puedan subscribirse
  isNavBarOpen$ = this.isNavBarOpen.asObservable();
  isOpacityActive$ = this.isOpacityActive.asObservable();


  constructor() { }

  // Método para abrir o cerrar el navbar
  toggleNavBar(): void {
    this.isNavBarOpen.next(!this.isNavBarOpen.value);
  }

  // Método para abrir el navbar
  openNavBar(): void {
    this.isNavBarOpen.next(true);
  }

  // Método para cerrar el navbar
  closeNavBar(): void {
    this.isNavBarOpen.next(false);
  }



  toggleOpacity(): void {
    this.isOpacityActive.next(!this.isOpacityActive.value);
  }


  activeOpacity(): void {
    this.isOpacityActive.next(true);
  }


  desactiveOpacity(): void {
    this.isOpacityActive.next(false);
  }







}
