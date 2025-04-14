import { User } from '../../models/user';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  route: Router = inject(Router);
  service: UserService = inject(UserService);

  isSuccess: boolean = false; // ✅ Affichage du toast de succès
  isError: boolean = false; // ❌ Affichage du toast d'erreur
  message: string = ''; // Message dynamique du toast

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.service
      .loginUser(
        this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? ''
      )
      .then((response: User) => {
        if (response.data) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('userId', String(response.data.id));

          this.message = 'Connexion réussie 🎉';
          this.isSuccess = true; //  Affichage du toast vert
          this.isError = false;

          setTimeout(() => {
            this.isSuccess = false;
            this.route.navigate(['/articles']).then(() => {
              window.location.reload();
            });
          }, 1000); // Attendre avant la redirection
        } else {
          this.message = 'Email ou mot de passe incorrect ❌';
          this.isError = true; //  Affichage du toast rouge
        }
      })
      .catch(() => {
        this.message = 'Une erreur est survenue ⚠️';
        this.isError = true; //  Affichage du toast rouge
      });
  }

  closeToast() {
    this.isSuccess = false;
    this.isError = false;
  }
}
