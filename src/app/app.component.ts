import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent implements OnInit {
  private defaultTitle = 'Patricio Abarca - Desarrollador web';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Configurar título y metadatos globales en el navegador
      this.metaService.updateTag({ name: 'description', content: 'Portfolio de Patricio Abarca, desarrollador web con experiencia en backend, frontend y soluciones en la nube. Explora mis proyectos, habilidades y servicios.' });
      this.metaService.updateTag({ name: 'keywords', content: 'desarrollador web, programador web, programador backend, backend, Java, Spring Boot, Angular, soluciones en la nube, cloud, Patricio Abarca' });
      this.metaService.updateTag({ name: 'author', content: 'Patricio Abarca' });
      this.metaService.updateTag({ property: 'og:title', content: this.defaultTitle });
      this.metaService.updateTag({ property: 'og:description', content: 'Portfolio de Patricio Abarca, desarrollador web con experiencia en backend, frontend y soluciones en la nube.' });
      // this.metaService.updateTag({ property: 'og:url', content: 'URL-de-tu-sitio-web' }); // Actualiza con la URL de tu sitio web

      // Configurar desplazamiento inicial
      window.scrollTo(0, 0);
    }
  }


}