import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'ESSOME Constant',
      role: 'Directeur Général',
      linkedIn: '',
      imageUrl:null  // placeholder for the image
    },
    {
      name: 'LOBE Augustine',
      role: 'Directrice Générale Adjointe',
      linkedIn: '',
      imageUrl: null  // placeholder for the image
    },
    {
      name: 'NDJE Fidèle',
      role: 'Responsable Développement Commercial',
      linkedIn: '',
      imageUrl: null  // placeholder for the image
    },
    {
      name: 'BILIM Astrid',
      role: 'Assistante administrative',
      linkedIn: 'https://www.linkedin.com/in/astrid-marthe-bilim-b4666a1ba',
      imageUrl: null  // placeholder for the image
    },
    {
      name: 'NGO BIYIHA Adele',
      role: 'Assistante Communication et Marketing',
      linkedIn: 'https://www.linkedin.com/in/adele-victoire-ngo-biyiha-854178273',
      imageUrl: null  // placeholder for the image
    },
    {
      name: 'YAMEDJEU Junior',
      role: 'Assistant comptable',
      linkedIn: 'https://www.linkedin.com/in/junior-yamedjeu-28ab5b299',
      imageUrl: null  // placeholder for the image
    },
    {
      name: 'NGO NDJOCK Marthe',
      role: 'Consultant RH',
      linkedIn: 'https://www.linkedin.com/in/marthe-julienne-ngo-ndjock-537861199',
      imageUrl: null  // placeholder for the image
    },
    {
      name: 'MOUAHA Dimitri',
      role: 'Consultant RH',
      linkedIn: 'https://www.linkedin.com/in/dimitri-mouaha-5b7193235',
      imageUrl: null  // placeholder for the image
    },
    {
      name: 'NDJINDA Alice',
      role: 'Consultant RH',
      linkedIn: 'https://www.linkedin.com/in/alice-cathérine-ndjinda-47617527a',
      imageUrl: null  // placeholder for the image
    }
  ];



}
