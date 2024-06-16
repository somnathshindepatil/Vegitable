import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss'],
})
export class SellerUpdateProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('name');
    console.warn(productId);
    productId &&
    this.product.getProduct(productId).subscribe((data) => {
      console.warn(data);
      
    });
  }

}
