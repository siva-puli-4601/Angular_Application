import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkEmail(value:RegExp): ValidatorFn
{
  return((control:AbstractControl): ValidationErrors | null => 
{
    const mail=control.value;
    if(!value.test(mail))
    {
       return {mailError:{value:mail}};
    }
    else
    return null;
})
}

export function checkPassword(value:RegExp): ValidatorFn
{
  return((control:AbstractControl): ValidationErrors | null => 
{
    const password=control.value;
    if(!value.test(password))
    {
       return {mailError:{value:password}};
    }
    else
    return null;
})
}