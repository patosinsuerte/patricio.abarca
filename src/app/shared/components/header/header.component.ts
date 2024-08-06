import { Component, computed, HostListener, OnInit } from '@angular/core';
import { NavBarControlService } from '../../services/nav-bar-control.service';
import { ColorHeaderService } from '../../services/color-header.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public currentSection: number = 0;


  constructor(private navBarControlService: NavBarControlService, private colorHeaderService: ColorHeaderService) { }

  ngOnInit(): void {
    this.colorHeaderService.$currentColor.subscribe(currentSection => this.currentSection = currentSection);
  }

  onMenuClick(): void {
    this.navBarControlService.toggleNavBar();
  }



  onOpacityClick(): void {
    this.navBarControlService.toggleOpacity();
  }


  change(index: number, sectionName: string) {
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


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.colorHeaderService.changeCurrentColorByScroll();
  }


}
