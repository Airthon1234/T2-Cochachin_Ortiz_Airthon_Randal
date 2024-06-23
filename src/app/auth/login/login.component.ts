import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router : Router){

  }

  submit():void{
    if (this.username === 'cochachin' && this.password === '12345') {
      sessionStorage.setItem('username', this.username);
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Invalid username or password');
    }
}
}
