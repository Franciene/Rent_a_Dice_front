import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  userLogado(){
    let text = JSON.parse(localStorage.getItem('user') || 'null'); 
    text != null ? this.router.navigateByUrl('/perfil') : this.router.navigateByUrl('/login');
  }

}
