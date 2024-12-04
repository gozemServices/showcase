import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from "./components/services/services.component";
import { CommingSoonComponent } from "./components/comming-soon/comming-soon.component";
import { TestimoniesComponent } from "./components/testimonies/testimonies.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { TeamComponent } from "./components/team/team.component";
import { OffersComponent } from "./components/offers/offers.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule, HeroComponent, ServicesComponent, CommingSoonComponent, TestimoniesComponent, AboutUsComponent, TeamComponent, OffersComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vitrine';
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  fawhatsapp = faWhatsapp;
  fainstagram = faInstagram;
  faTwitter = faTwitter;

  socials = [
    {
      id: 1,
      name: 'facebook',
      link: 'https://www.facebook.com/gozenservice',
      icon: this.faFacebook,
      color: 'text-blue-700'
    },
    {
      id: 2,
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/gozen-service/',
      icon: this.faLinkedin,
      color: 'text-blue-500'
    },
    {
      id: 3,
      name: 'x',
      link: 'https://x.com/Gozen2024?t=pKUUznnvpgVR38A9UFpSOg&s=09',
      icon: this.faTwitter,
      color: 'text-blue-400'
    }
    
  ]
}
