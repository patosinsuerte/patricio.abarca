import { Component, HostListener, OnInit } from '@angular/core';
import { NavBarControlService } from '../../services/nav-bar-control.service';
import { ColorHeaderService } from '../../services/color-header.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  public isNavBarOpen = false;
  public isOpacityActive = false;
  public currentColor: number = 0;


  constructor(private navBarControlService: NavBarControlService, private colorHeaderService: ColorHeaderService) { }

  ngOnInit(): void {
    this.navBarControlService.isNavBarOpen$.subscribe(isOpen => this.isNavBarOpen = isOpen);
    this.navBarControlService.isOpacityActive$.subscribe(isActive => this.isOpacityActive = isActive);
    this.colorHeaderService.$currentColor.subscribe(currentColor => this.currentColor = currentColor);
  }

  onCloseClick(): void {
    this.navBarControlService.closeNavBar();
  }


  onDesactiveOpacity(): void {
    this.navBarControlService.desactiveOpacity();
  }


  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.isNavBarOpen) {
      return;
    }
    const targetElement = event.target as HTMLElement;
    if (targetElement.closest('.menu-opacity')) {
      this.onCloseClick();
      this.onDesactiveOpacity();
    }
  }


  onChangeCurrentMenuColor(index: number, sectionName: string) {
    this.colorHeaderService.changeCurrentColor(index);
    this.scrollTo(sectionName);
  }



  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const yOffset = 0;

      window.scrollTo({
        top: rect.top + window.scrollY + yOffset,
        behavior: 'smooth'
      });
    }
  }






}
