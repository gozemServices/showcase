import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  fawhatsapp = faWhatsapp;
  fainstagram = faInstagram;



}
