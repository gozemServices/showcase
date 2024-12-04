import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

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
  faTwitter = faTwitter;

  gozen = {
    description : {
      p1 : ` Créé en 2015 par des jeunes très ambitieux, GOZEN SERVICE propose des prestations qui couvrent les 
                        métiers des Ressources Humaines: le Recrutement, la Formation & le Coaching, la mise à disposition du personnel
                        temporaire et le conseil en organisation. GOZEN s&rsquo;est donné ainsi pour mission d&rsquo;apporter des solutions 
                        adaptées pour le positionnement et l&rsquo;épanouissement professionnel des individus`,
      p2 : `Animée par une vision claire de devenir le facilitateur des trajectoires professionnelles, GOZEN SERVICE place l’humain au centre de tous ses processus, en proposant des solutions innovantes et adaptées pour accompagner les entreprises et les talents dans le montage de leurs projets professionnels.`
    },

    socials : [
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



}
