import { Component } from '@angular/core';

interface FaqItem {
    question: string;
    answer: string;
    open: boolean;
}

@Component({
    selector: 'core-faq',
    standalone: false,
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
})
export class FaqComponent {
    faqs: FaqItem[] = [
        {
            question: '¿Qué tecnologías usas?',
            answer: 'Uso Angular para el frontend, Spring Boot para el backend y Flutter para desarrollo móvil multiplataforma.',
            open: false,
        },
        {
            question: '¿Cuales son los precios?',
            answer: 'Sí, trabajo como desarrollador freelance.',
            open: false,
        },
        {
            question: '¿Realizas mantenimiento a las webs?',
            answer: 'Sí, trabajo como desarrollador freelance.',
            open: false,
        },
        {
            question: '¿Tienes la agenda disponible?',
            answer: 'Sí, trabajo como desarrollador freelance.',
            open: false,
        },
    ];

    toggle(index: number): void {
        this.faqs[index].open = !this.faqs[index].open;
    }
}
