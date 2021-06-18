import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  imageSource : any;
  listProducts : any = [];
  listProduct : any = [];
  
  constructor(private sanitizer: DomSanitizer, private productService : ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(resp => {
      for(let item of resp.payload){
        this.imageSource = this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64, ${item.imageFile}`);
        item.image = this.imageSource
        this.listProduct.push(item);
      }
    });
  }

}
