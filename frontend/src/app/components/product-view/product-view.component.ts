import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/productCategory';
import { ProductDto } from 'src/app/models/productDto';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product =new Product();
  productCategory: ProductCategory =new ProductCategory();
  productDto: ProductDto = new ProductDto();

  constructor(private productService: ProductService, private productCategoryService :ProductCategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
   
    this.productService.getById(id)
      .then(response => {

        this.product = response;

        this.productDto.productId= this.product.productId;
        this.productDto.productCategoryId= this.product.productCategoryId;
        this.productDto.name= this.product.name;
        this.productDto.description= this.product.description;
        this.productDto.price= this.product.price;
        this.productDto.productCategoryName= "sin definir";

              this.productCategoryService.getById(this.product.productCategoryId)
                .then(response => {
                this.productCategory = response;
                this.productDto.productCategoryName= this.productCategory.description;
                  })
                .catch(error => {
                  console.log(error);
              })
      
      })
      .catch(error => {
        console.log(error);
      })

  }
}

