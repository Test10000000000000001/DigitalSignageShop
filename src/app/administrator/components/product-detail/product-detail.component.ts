import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/shared/interfaces/icategory';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  category: ICategory;
  imagePath: string = "/assets/images/product-images/";
  placeholder: string = "1_1.jpg"
  imgSrc: String = "";
  imgAlt: String = "";
  constructor(
    private route: ActivatedRoute,
    private ps: ProductService,
    private cs: CategoryService
  ) { 
    this.imgSrc = this.imagePath + this.placeholder;
  }

  ngOnInit(): void {
      this.product = this.route.snapshot.data['product'];
      if(this.product) {
        this.cs.findOne(this.product.categoryId).subscribe(data => {
          this.category = data;
          this.imgSrc = `${this.imagePath}${this.product.categoryId}_${this.product.id}.jpg`;
          this.imgAlt = this.product.name;
        });
      }
  }

}
