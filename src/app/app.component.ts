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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, ServicesComponent, CommingSoonComponent, TestimoniesComponent, AboutUsComponent, TeamComponent, OffersComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vitrine';
}
