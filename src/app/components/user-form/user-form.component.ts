import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/User';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm: FormGroup;
  updateMode: boolean = false;
  userId: string | null = null;

  fb = inject(FormBuilder);
  userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required]
    });

    // Verificamos si estamos en modo actualización
    this.userId = this.route.snapshot.paramMap.get('_id');
    if (this.userId) {
      this.updateMode = true;
      this.loadDataUser(this.userId);
    }
  }

  loadDataUser(userId: string): void {
    this.userService.getById(userId).subscribe((user: User) => {
      this.userForm.patchValue(user);
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      alert('Completa los campos correctamente.');
      return;
    }

    const userData: User = this.userForm.value;

    if (this.updateMode && this.userId) {

      this.userService.updateUser(this.userId, userData).subscribe({
        next: () => {
          alert('Usuario actualizado.');
          this.router.navigate(['/home']);
        },
        error: (error) => {
          alert('Error al actualizar el usuario: ' + error);
        }
      });
    } else {

      this.userService.newUser(userData).subscribe({
        next: () => {
          alert('Usuario creado.');
          this.router.navigate(['/home']);
        },
        error: (error) => {
          alert('Error al crear el usuario: ' + error);
        }
      });
    }
  }
}