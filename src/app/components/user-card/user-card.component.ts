import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/User';
import { BotoneraComponent } from '../botonera/botonera.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() miUser!: User;


}


