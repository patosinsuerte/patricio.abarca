import { Component } from '@angular/core';

@Component({
    selector: 'core-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    standalone: false
})
export class ContactComponent {

  private readonly email: string = 'patricioabarca88@gmail.com';

  public async onCopyEmail(): Promise<void> {

    await navigator.clipboard.writeText(this.email);
    alert('Correo copiado al portapapeles!');


  }

}
