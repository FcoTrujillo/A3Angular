import { Component, inject } from '@angular/core';
import { BotoneraComponent } from '../../components/botonera/botonera.component';
import { User } from '../../interfaces/User';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [BotoneraComponent, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  userService = inject(UserService)
  activatedRoute = inject(ActivatedRoute);

  miUser!: User;


  ngOnInit(): void {
    const _id = this.activatedRoute.snapshot.paramMap.get('_id');
    if (_id) {
      this.userService.getById(_id).subscribe((data: User) => {
        this.miUser = data;
      });
    }
  }
}




