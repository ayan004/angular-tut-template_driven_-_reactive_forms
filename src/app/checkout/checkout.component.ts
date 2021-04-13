import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ValidationErrors, AbstractControl } from '@angular/forms';
// import { ValidatePhone } from './phoneValidation';
import { ValidatePasswordWithCapitalLetter, ValidatePasswordWithSmallLetter, ValidatePasswordWithNumber, ValidatePasswordWithSpecialCharacter, ValidateConfirmPasswordEqualsPassword, ValidatePhone, ValidateWebsite, ValidateEmailWithSingleDot, ValidatePasswordAllValidations } from './customValidations';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  // checkoutForm = new FormGroup({
  //     emailAddr: new FormControl(),
  //     quantity: new FormControl('', [ Validators.required ]),
  //     terms: new FormControl()
  // })

  constructor(private formBuilder: FormBuilder) { 
    this.checkoutForm = formBuilder.group({
      emailAddr: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(18), Validators.email, ValidateEmailWithSingleDot]),
      password: ['', [Validators.required, ValidatePasswordAllValidations]],
      // ValidatePasswordWithCapitalLetter, ValidatePasswordWithSmallLetter, ValidatePasswordWithNumber, ValidatePasswordWithSpecialCharacter
      confirm_password: ['', [Validators.required, ValidateConfirmPasswordEqualsPassword]],
      website: ['', [Validators.required, ValidateWebsite]],
      phoneNumber: ['', [Validators.required, ValidatePhone]],
      terms: ['', Validators.requiredTrue]
    });
  }
  // , Validators.pattern('drftgyhu')

  ngOnInit(): void { }

  postData(){
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
    console.log(this.checkoutForm.value.emailAddr);
  }

}
