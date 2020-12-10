import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/common/my-validators';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/productCategory';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  message: string = '';
  productCategoryList: Array<ProductCategory> =[];

  productForm = new FormGroup({
    productId: new FormControl(''),
    productCategoryId: new FormControl(''),
    name: new FormControl('',[ Validators.required, MyValidators.lettersOnly() ]),
    description: new FormControl('',[ Validators.required, MyValidators.lettersOnly() ]),
    price: new FormControl('',[ Validators.required, MyValidators.numbersOnly() ])
  });

  constructor(private productService: ProductService,private productCategoryService:ProductCategoryService) { }

  ngOnInit(): void {
    
    this.productCategoryService.getAll()
      .then(response => {
        this.productCategoryList = response;
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  get productId() { return this.productForm.get('productId'); }
  get productCategoryId() { return this.productForm.get('productCategoryId'); }
  get name() { return this.productForm.get('name'); }
  get description() { return this.productForm.get('description'); }
  get price() { return this.productForm.get('price'); }

  onSubmit(){
    //console.log(this.productForm.get('productId'));
    let product = new Product();
    product.productId = this.productForm.get('productId').value;
    product.productCategoryId = this.productForm.get('productCategoryId').value;
    product.name = this.productForm.get('name').value;
    product.description = this.productForm.get('description').value;
    product.price = this.productForm.get('price').value;

    this.productService.addProduct(product)
      .then(response  => {
        this.message = "product successfully added";
      })
      .catch(error =>{
        this.message = "An error has occurred!";
      })
  }
}
