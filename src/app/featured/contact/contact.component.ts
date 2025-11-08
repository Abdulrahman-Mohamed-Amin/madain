import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { TranslateModule } from '@ngx-translate/core';
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent , ReactiveFormsModule , TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

      constructor(private meta: MetaService) {
        this.meta.updateTags({
          title: 'مدائن العقارية | تواصل معنا',
          description:
            'مدائن العقارية شركة سعودية متخصصة في تطوير وتسويق العقارات السكنية تقدم شقق تمليك حديثة في جدة ومكة بمعايير جودة عالية .',
          url: 'https://madain.sa/retal',
          keywords:
            'عقارات, شركة مدائن العقارية, شقق تمليك جدة, فلل للبيع, مشاريع سكنية, شراء شقق, عقارات جدة',
        });
      }
   contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required , Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', Validators.required)
    });
  }

  toastMessage: string | null = null;

showToast(message: string) {
  this.toastMessage = message;
  setTimeout(() => {
    this.toastMessage = null;
  }, 3000); // 3 ثواني
}
  
  sendEmail() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs.send(
        'service_i31g11c',   
        'template_bdjhwfn', 
        formData,
        'XaVuXfuWTEMN_kLI8' 
      ).then(() => {
        this.showToast('تم ارسال رسالتك بنجاح ')
        this.contactForm.reset();
      }).catch(() => {
      });
    } else {
      
    }
  }

}
