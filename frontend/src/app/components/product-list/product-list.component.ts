import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/productCategory';
import { ProductDto } from 'src/app/models/productDto';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product> = [];
  productCategoryList: Array<ProductCategory> = [];
  productDtoList: Array<ProductDto> = [];
  filter: string;
  
  constructor(private productService: ProductService, private productCategoryService: ProductCategoryService) { }

  categoryFilter(){

  }
  delete(id){

    this.productService.delete(id).
        then(response => {     
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
  }
  ngOnInit() {
    this.productService.getAll()
      .then(response => {
        this.productList = response;
      })
      .catch(error => {
        console.log(error);
      })

      this.productCategoryService.getAll()
      .then(response => {
        this.productCategoryList = response;
        //console.log(this.productCategoryList);
      })
      .catch(error => {
        console.log(error);
      })

       //-------------------   ooohh creo array de dto y lo muestro ------------------------------------
       this.productService.getAll()
      .then(response => {
        
        this.productList = response;
        this.productList.forEach(product => {
           
          let productDto= new ProductDto();
          productDto.productId= product.productId;
          productDto.productCategoryId= product.productCategoryId;
          productDto.name= product.name;
          productDto.description= product.description;
          productDto.price= product.price;
          productDto.productCategoryName= "sin definir";
              

            this.productCategoryService.getAll()
            .then(response => {
             
              this.productCategoryList = response;
              this.productCategoryList.forEach(productCategory => {
                  if(productCategory.productCategoryId==product.productCategoryId){
                      productDto.productCategoryName= productCategory.description;
                }
              });
            })
            .catch(error => {
              console.log(error);
            })
      
          //console.log(productDto);
          this.productDtoList.push(productDto);

        });
        //console.log("dtos");
        //console.log(this.productDtoList);
      })
      .catch(error => {
        console.log(error);
      })
      //--hasta aca-----------------------------------------------------------------------------------
  }

}
