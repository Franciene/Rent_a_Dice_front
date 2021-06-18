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
  constructor(private router: Router, private productService : ProductService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.productId = params['id'];
    this.getProduct(this.productId);
    console.log("",this.productId);
    });
  }

  getProduct(id : any){
    this.productService.getProductById(id).subscribe( resp =>{
      if(resp.success){
        this.game = resp.payload;
        this.game.imageFile = this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64, ${resp.payload.imageFile}`);
      }
    });
  
  }

}
