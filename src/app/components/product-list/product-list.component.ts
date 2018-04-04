import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: Product[];
  constructor(private _service: ProductService) {// Déclarer une dépendance sur le service
  }

  ngOnInit() { // Equivalent @postConstruct JEE
    this._service.getProducts().subscribe(
      result => {this.data = result; }
    );
  }
}
