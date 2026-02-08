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
            answer: `Utilizo Angular para el desarrollo del frontend web, Spring Boot para el backend y Flutter para aplicaciones móviles multiplataforma. Además, trabajo con herramientas como Firebase para bases de datos móviles y notificaciones, PostgreSQL para almacenamiento de datos, y Photoshop, Illustrator y Figma para diseño de interfaces y experiencias de usuario.
`,
            open: false,
        },
        {
            question: '¿Cuáles son los precios?',
            answer: 'No hay un precio fijo por servicio, depende de la complejidad del proyecto. Este se determina con un presupuesto que se le envia al cliente y se basa en la guía de precios que se encuentra en el documento <a href="ruta/del/documento.pdf" target="_blank" rel="noopener noreferrer">"Servicios y condiciones"</a> donde se establecen guías de cobro dependiendo de varios parametros relevantes que determinan el precio. Por ejemplo, cuantas secciones tiene la web, funcionalidades, diseño, formularios, etc. Pero, puedes ver esa guía y hacer un estimado de acuedo a lo que necesitas y en que plan entraría tu solicitud.',
            open: false,
        },

        {
            question:
                '¿Emites factura por tus servicios de diseño web y desarrollo?',
            answer: 'Sí, entrego factura electrónica por todos mis servicios, asegurando respaldo legal y formalidad.',
            open: false,
        },
        {
            question:
                '¿Qué tipo de soporte ofreces después de entregar el proyecto?',
            answer: 'Una vez terminado el trabajo ofrezco soporte básico y mantención gratis durante 1 mes con las condiciones especificadas en el documento <a href="ruta/del/documento.pdf" target="_blank" rel="noopener noreferrer">"Servicios y condiciones"</a>. El soporte básico gratis del primer mes cubre únicamente corrección de errores y ajustes menores. Cualquier funcionalidad o cambio adicional fuera de estas condiciones se presupuestará aparte según la guía precios en el apartado de Servicio Técnico.',

            // El primer mes de mantención es gratis con las condiciones especificadas en el documento <a href="ruta/del/documento.pdf" target="_blank" rel="noopener noreferrer">"Servicios y condiciones"</a>.',
            open: false,
        },

        {
            question: '¿Los diseños que muestras son los que debo escoger?',
            answer: 'No, esos diseños y algunos proyectos son ejemplos de lo que puedo hacer y de mi estilo, tu sitio o aplicación sera como tu consideres (tu diseño) o contratar el servicio de diseño más el desarrollo que tienen un precio como pack.',
            open: false,
        },

        {
            question: '¿Haces soporte a proyectos NO realizado por ti?',
            answer: 'Los precios de mantenimiento especificados en el documento <a href="ruta/del/documento.pdf" target="_blank" rel="noopener noreferrer">"Servicios y condiciones"</a> son para proyectos realizados por mi. Sin embargo, existe la posiblidad de crear un presupuesto con la guia de precios de Servicio Técnico a proyectos heredados (no creados por mi) dependiendo de la complejidad del código heredado, lenguaje de programación, técnologias, etc.',
            open: false,
        },

        {
            question: '¿Es útil la guía de precios?',
            answer: 'La guía es una referencia relativa y general de precios. Los proyectos se clasifican agrupando diferentes especificaciones y caracteristicas según mí criterio. Un proyecto, podría entrar en la categoría de plan básico y se cobrara así y así sucesivamente. Tambien, detallo técnicamente al cliente porque entraría un proyecto en el plan X, Y, Z.',
            open: false,
        },
        {
            question: '¿Tienes la agenda disponible?',
            answer: 'Sí, actualmente tengo agenda disponible.',
            open: false,
        },
    ];

    toggle(index: number): void {
        this.faqs[index].open = !this.faqs[index].open;
    }
}
