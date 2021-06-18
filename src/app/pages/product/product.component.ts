import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  game : any;
  productId : any;
  constructor(private router: Router, private productService : ProductService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.productId = params['id'];
    this.getProduct(this.productId);
    console.log("",this.productId);
    });
    this.game = {
      image : "../../../assets/munchkin.svg",
      name : "Munchkin",
      descr : "Um jogo de cartas onde as suas maiores armas são trapacear e tirar sarro dos adversários.",
      type : "MAIS VENDIDO",
      color : "#729290",
      age: 10,
      linguage:"Português",
      time: 60,
      players:"3 - 6",
      priceRent: "20,00",
      priceNew: "120,00",
      priceBuy: "60,00",
      history:"Entre na Dungeon e explore seus mistérios! Abra portas secretas e mate todos os monstros que cruzarem seu caminho. Trapaceie seus colegas. Pegue todo o tesouro para você e saia correndo. Seja sincero: Você adora isso!",
      component: "95 Cartas de Porta/Dungeon 73 Cartas de Tesouro 1 Dado de 6 lados personalizado 1 Livro de Regras"
    }
  }

  getProduct(id : any){
    this.productService.getProductById(id);
  }

}
