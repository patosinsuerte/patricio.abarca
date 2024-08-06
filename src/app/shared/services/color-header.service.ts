import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorHeaderService {

  constructor() { }


  private _currentColor = new BehaviorSubject<number>(0);

  public $currentColor = this._currentColor.asObservable();


  changeCurrentColor(currentSectionNumber: number): void {
    if (currentSectionNumber >= 0 && currentSectionNumber <= 5) {
      this._currentColor.next(currentSectionNumber);
    }
  }


  changeCurrentColorByScroll() {
    const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    // Definir un desfase para la activación
    const activationOffset = 0.1;

    sections.forEach((section, index) => {
      const sectionId = section.id;
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionOffsetBottom = sectionOffsetTop + sectionHeight;

      // Determina si la sección está dentro del viewport con el desfase
      const isInView = (scrollTop + viewportHeight * activationOffset > sectionOffsetTop) &&
        (scrollTop < sectionOffsetBottom - (viewportHeight * activationOffset));

      if (isInView) {
        const sectionNumber = ['hero', 'about', 'services', 'experience', 'projects', 'contact'].indexOf(sectionId);
        if (sectionNumber !== -1) {
          this._currentColor.next(sectionNumber);
        }
      }
    });
  }



}
