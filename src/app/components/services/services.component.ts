import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboardList, faCoffee, faPeopleArrows, faUserCheck, faUserCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  faPeapleArrow = faPeopleArrows;
  faClipboardList = faClipboardList;
  faUserCheck = faUserCheck;
  faUserCog = faUserCog;

}
