import { Router, RouterModule } from '@angular/router';

import { UserService } from './../../services/user.service';
import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { Page } from '../../interfaces/Page';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  arrUsers: User[] = [];
  page: number = 0;
  totalPages: number = 1;
  perPage: number = 9;

UserService = inject(UserService)



ngOnInit(): void{
    this.getUsers();
}

getUsers(): void {
  this.UserService.getUsers().subscribe({
    next: (response: Page) => {
      console.log('Respuesta de la API:', response); // Verifica la respuesta
      this.arrUsers = response.results;
      this.totalPages = response.total_pages;
    },
    error: (error) => {
      console.error('Error al obtener usuarios:', error);
      console.error('Respuesta completa:', error.error); // Muestra la respuesta completa
    },
  });
}

}