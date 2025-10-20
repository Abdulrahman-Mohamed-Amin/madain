import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent , ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
   contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', Validators.required)
    });
  }
  
  sendEmail() {
    console.log(this.contactForm.valid)
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs.send(
        'service_febam5i',   
        'template_6jx2u3o', 
        formData,
        'Ut7Vw1tKZhbyB8wXp' 
      ).then(() => {
        this.contactForm.reset();
        alert('done')
      }).catch(() => {
        alert("error")
      });
    } else {
    }
  }

}
