import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  @Input() _id: string = "";
  @Input() parent: string = "";

  userService = inject(UserService);

  router = inject(Router);

  deleteUser(_id: string): void {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar al usuario con ID: ' + _id + '?');
    if (confirmacion) {
      this.userService.deleteUser(_id).subscribe({
        next: (response) => {

          if (response !== null && response !== undefined) {
            alert('Se ha borrado correctamente el usuario con ID: ' + _id);
            if (this.parent === 'view') {
              this.router.navigate(['/home']);
            } else if (this.parent === 'card') {
              location.reload();
            }
          } else {
            alert('La respuesta no es válida, verifique la operación.');
          }
        },
        error: (error) => {
          alert('Error al borrar el usuario: ' + error);
        }
      });
    }
  }
  
  

  viewDetail(_id: string) {
    this.router.navigate(['/user', _id]);
  }

  updateUser(_id: string) {
    this.router.navigate(['/updateuser', _id]);
  }
}

