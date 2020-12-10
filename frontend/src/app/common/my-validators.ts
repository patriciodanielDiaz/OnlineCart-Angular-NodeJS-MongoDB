import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ProductService } from "../services/product.service";

export class MyValidators {
    static forbiddenWords(forbiddenWords: RegExp): ValidatorFn {        
        return (control: AbstractControl): {[key: string]: any} | null => {
          const forbidden = forbiddenWords.test(control.value);

          return forbidden ? { 'forbiddenWords': {value: control.value} } : null;
        };
    }

    static lettersOnly(): ValidatorFn {
        let regExp: RegExp = /^[a-zA-Z\s]*$/;

        return (control: AbstractControl): {[key: string]: any} | null => {                     
            const lettersOnly = regExp.test(control.value);
            //console.log(control.value);
            return !lettersOnly ? { 'lettersOnly': {value: control.value} } : null;
        };
    }

    static numbersOnly(): ValidatorFn {
        let regExp: RegExp = /^[0-9]*$/;

        return (control: AbstractControl): {[key: string]: any} | null => {                     
            const numbersOnly = regExp.test(control.value);
            //console.log(control.value);
            return !numbersOnly ? { 'numbersOnly': {value: control.value} } : null;
        };
    }
    static productExists(productService: ProductService): AsyncValidatorFn {       
            return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
              if (control.value == '') {
                return null;
              }
              else {
                return productService.getById(control.value)
                    .then(response => {
                        return response ? { 'emailExists': { value: control.value } } : null;
                    })
              }                  
            };
      }
        
}
