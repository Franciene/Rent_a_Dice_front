import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  listGames : any = [];
  listToPlay : any = [];
  user: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user') || 'null'); 

    console.log(typeof(this.user));

    if (this.user == null){
      this.router.navigateByUrl('/home');
    }

    let game1 = {
      name : "Munchkin",
      image : "../../../assets/jogo1.jpg"
    }

    let game2 = {
      name : "Duel",
      image : "../../../assets/jogo3.jpg"
    }

    let game3 = {
      name : "Ticket to Ride",
      image : "../../../assets/jogo2.jpg"
    }

    let game4 = {
      name : "Caylus",
      image : "../../../assets/jogo4.jpg"
    }

    let game5 = {
      name : "Otys",
      image : "../../../assets/jogo5.jpg"
    }

    this.listGames.push(game1);
    this.listGames.push(game2);
    this.listGames.push(game3);
    this.listGames.push(game4);
    this.listGames.push(game5);

    let game6 = {
      name : "Arkham horror",
      image : "../../../assets/jogo6.jpeg"
    }

    let game7 = {
      name : "Catan",
      image : "../../../assets/jogo7.jpeg"
    }

    this.listToPlay.push(game7);
    this.listToPlay.push(game5);
    this.listToPlay.push(game1);
    this.listToPlay.push(game6);
    this.listToPlay.push(game2);

  }

}
