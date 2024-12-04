import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarker = faMapMarkerAlt;
  faClock = faClock;

  contactForm!: FormGroup;
  gozen = {
    name: '',
    email: '',
    message: '',
    address: '3639, Avenue De Gaulle Carrefour Armée de l’Air – Bonapriso B.P. 5423 Douala, Cameroun',
    phone: '(+237) 699 372 46',
    emailContact: 'infos@gozenservice.com',
    hours: '8 h 00 - 18 h 00'
  };

  private fb = inject(FormBuilder);


  ngOnInit(): void {
    // Initialize the reactive form
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.gozen.name = this.contactForm.value.name;
      this.gozen.email = this.contactForm.value.email;
      this.gozen.message = this.contactForm.value.message;
      console.log('Form Submitted:', this.gozen);
      // Further processing, such as sending the data to an API, can go here.
    } else {
      console.log('Form is invalid');
    }
  }

  get f() {
    return this.contactForm.controls;
  }

}
