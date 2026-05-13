import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdministradorService } from '../services/login.service';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credenciales = {
    usuario: '',
    contrasenia: ''
  };

  private router = inject(Router);
  private adminService = inject(AdministradorService);

  iniciarSesion() {
    this.adminService.login(this.credenciales.usuario, this.credenciales.contrasenia).subscribe({

      next: (respuesta) => {
        console.log( respuesta);
        this.router.navigate(['/administrador']);
      },

      error: (err) => {
        console.error(err.error || 'Error de acceso');
      }

    });
  }
}
