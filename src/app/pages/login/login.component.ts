import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : any;
  senha : any;

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  login(){
    let data = {
      email: this.email,
      senha: this.senha
    }
    this.userService.login(data).subscribe( resp => {
      localStorage.setItem("user", JSON.stringify(resp.payload));
      this.router.navigateByUrl('/home');
    });
  }

}
