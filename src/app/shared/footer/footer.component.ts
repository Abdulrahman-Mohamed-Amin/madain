import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
whatsappNumber:string = '996539885590'
phoneNumber:string = '920016343'
 email = 'marketing@madain.sa';

  sendEmail() {
    window.location.href = `mailto:${this.email}`;
  }
  location() {
    window.open( `https://maps.app.goo.gl/oQGvU9VZ7c58Gg1U6` , "_blank")
  }
    openWhatsApp() {
    window.open(`https://wa.me/${this.whatsappNumber}`, "_blank");
  }

  openCall() {
    window.open(`tel:${this.phoneNumber}`, '_self');
  }
}
