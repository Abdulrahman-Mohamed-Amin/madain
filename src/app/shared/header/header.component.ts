import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  open:boolean = true
  openContact:boolean = false
  @Input() logo = true

  whatsappNumber:string = '996539885590'
phoneNumber:string = '920016343'
 email = 'marketing@madain.sa';

  sendEmail() {
    window.location.href = `mailto:${this.email}`;
  }
    openWhatsApp() {
    window.open(`https://wa.me/${this.whatsappNumber}`, "_blank");
  }

  openCall() {
    window.open(`tel:${this.phoneNumber}`, '_self');
  }
}
