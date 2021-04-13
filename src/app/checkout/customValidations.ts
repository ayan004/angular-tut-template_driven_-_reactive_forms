import { AbstractControl } from "@angular/forms";

var password;

export function ValidatePasswordAllValidations(control: AbstractControl): {[key: string]: any} | null  {
    // console.log('ValidatePasswordAllValidations - on');
    password = control.value;
    if (!password.includes('A') && !password.includes('B') && !password.includes('C') && !password.includes('D') && !password.includes('E') && !password.includes('F') && !password.includes('G') && !password.includes('H') && !password.includes('I') && !password.includes('J') && !password.includes('K') && !password.includes('L') && !password.includes('M') && !password.includes('N') && !password.includes('O') && !password.includes('P') && !password.includes('Q') && !password.includes('R') && !password.includes('S') && !password.includes('T') && !password.includes('U') && !password.includes('V') && !password.includes('W') && !password.includes('X') && !password.includes('Y') && !password.includes('Z')) {
      return { 'noCapitalLetter': true };
    } 

    if (!password.includes('a') && !password.includes('b') && !password.includes('c') && !password.includes('d') && !password.includes('e') && !password.includes('f') && !password.includes('g') && !password.includes('h') && !password.includes('i') && !password.includes('j') && !password.includes('k') && !password.includes('l') && !password.includes('m') && !password.includes('n') && !password.includes('o') && !password.includes('p') && !password.includes('q') && !password.includes('r') && !password.includes('s') && !password.includes('t') && !password.includes('u') && !password.includes('v') && !password.includes('w') && !password.includes('x') && !password.includes('y') && !password.includes('z')) {
      return { 'noSmallLetter': true };
    }

    if (!password.includes(1) && !password.includes(2) && !password.includes(3) && !password.includes(4) && !password.includes(5) && !password.includes(6) && !password.includes(7) && !password.includes(8) && !password.includes(9) && !password.includes(0)) {
      return { 'noNumber': true };
    }

    if (!password.includes('!') && !password.includes('@') && !password.includes('#') && !password.includes('$') && !password.includes('%') && !password.includes('^') && !password.includes('&') && !password.includes('*') && !password.includes('(') && !password.includes(')') && !password.includes('_') && !password.includes('+') && !password.includes('-') && !password.includes('=') && !password.includes('{') && !password.includes('[') && !password.includes('}') && !password.includes(']') && !password.includes('|') && !password.includes(':') && !password.includes(';') && !password.includes('"') && !password.includes('<') && !password.includes(',') && !password.includes('>') && !password.includes('.') && !password.includes('?') && !password.includes('/')) {
      return { 'noSpecialCharacter': true };
    }
    
    return null;
}

export function ValidatePasswordWithCapitalLetter(control: AbstractControl): {[key: string]: any} | null  {
    // console.log('ValidatePasswordWithCapitalLetter - on');
    password = control.value;
    if (!password.includes('A') && !password.includes('B') && !password.includes('C') && !password.includes('D') && !password.includes('E') && !password.includes('F') && !password.includes('G') && !password.includes('H') && !password.includes('I') && !password.includes('J') && !password.includes('K') && !password.includes('L') && !password.includes('M') && !password.includes('N') && !password.includes('O') && !password.includes('P') && !password.includes('Q') && !password.includes('R') && !password.includes('S') && !password.includes('T') && !password.includes('U') && !password.includes('V') && !password.includes('W') && !password.includes('X') && !password.includes('Y') && !password.includes('Z')) {
      return { 'noCapitalLetter': true };
    } 
    return null;
}

export function ValidatePasswordWithSmallLetter(control: AbstractControl): {[key: string]: any} | null  {
    console.log('ValidatePasswordWithSmallLetter - on');
    // var password = control.value;
    if (!password.includes('a') && !password.includes('b') && !password.includes('c') && !password.includes('d') && !password.includes('e') && !password.includes('f') && !password.includes('g') && !password.includes('h') && !password.includes('i') && !password.includes('j') && !password.includes('k') && !password.includes('l') && !password.includes('m') && !password.includes('n') && !password.includes('o') && !password.includes('p') && !password.includes('q') && !password.includes('r') && !password.includes('s') && !password.includes('t') && !password.includes('u') && !password.includes('v') && !password.includes('w') && !password.includes('x') && !password.includes('y') && !password.includes('z')) {
      return { 'noSmallLetter': true };
    }
    return null;
}

export function ValidatePasswordWithNumber(control: AbstractControl): {[key: string]: any} | null  {
    console.log('ValidatePasswordWithNumber - on');
    // var password = control.value;
    if (!password.includes(1) && !password.includes(2) && !password.includes(3) && !password.includes(4) && !password.includes(5) && !password.includes(6) && !password.includes(7) && !password.includes(8) && !password.includes(9) && !password.includes(0)) {
      return { 'noNumber': true };
    } 
    return null;
}

export function ValidatePasswordWithSpecialCharacter(control: AbstractControl): {[key: string]: any} | null  {
    console.log('ValidatePasswordWithSpecialCharacter - on');
    // var password = control.value;
    if (!password.includes('!') && !password.includes('@') && !password.includes('#') && !password.includes('$') && !password.includes('%') && !password.includes('^') && !password.includes('&') && !password.includes('*') && !password.includes('(') && !password.includes(')') && !password.includes('_') && !password.includes('+') && !password.includes('-') && !password.includes('=') && !password.includes('{') && !password.includes('[') && !password.includes('}') && !password.includes(']') && !password.includes('|') && !password.includes(':') && !password.includes(';') && !password.includes('"') && !password.includes('<') && !password.includes(',') && !password.includes('>') && !password.includes('.') && !password.includes('?') && !password.includes('/')) {
      return { 'noSpecialCharacter': true };
    } 
    return null;
}

export function ValidateConfirmPasswordEqualsPassword(control: AbstractControl): {[key: string]: any} | null  {
    console.log('ValidateConfirmPasswordEqualsPassword - on');
    var confirm_password = control.value;
    if (password !== confirm_password) {
      return { 'notEqualToPassword': true };
    } 
    return null;
}

export function ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value && control.value.length != 10) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
}

export function ValidateWebsite(control: AbstractControl): {[key: string]: any} | null  {
    var website = control.value;
    var dot = 0;
    for(var i = 0; i < website.length; i++){
      if(website[i] === "."){
        dot++;
        if(website[i+1] === undefined){
          return { 'websiteInvalid': true };
        }
        if(dot > 2){
          return { 'websiteInvalid': true };
        }
      } 
    }
    if(dot == 0){
      return { 'websiteInvalid': true };
    }

    return null;
}

export function ValidateEmailWithSingleDot(control: AbstractControl): {[key: string]: any} | null  {
    var email = control.value;
    var dot = 0;
    for(var i = 0; i < email.length; i++){
      if(email[i] === "."){
        dot++;
        if(email[i+1] === undefined){
          return { 'emailContainNoDot': true };
        }
        if(dot > 2){
          return { 'emailContainNoDot': true };
        }
      } 
    }
    if(dot == 0){
      return { 'emailContainNoDot': true };
    }

    return null;
}