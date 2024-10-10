import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export function CheckUsername(control: AbstractControl): ValidationErrors | null {
//     const username = control.value;
//     const patt= /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
//     if(username==="siva")
//     {
//         return {errorUsername:{value:username}};
//     }
//     else
//     return null;
// }

export function CheckUsername(value:RegExp): ValidatorFn{
    return((control: AbstractControl): ValidationErrors | null =>{
        const username = control.value;
       
        if(!value.test(username))
        {
            return {errorUsername:{value:username}};
        }
        else
        return null;
    });
}



export function CheckPassword():ValidatorFn{
    return ((control:AbstractControl): ValidationErrors | null =>{

        const pass=control.get("password");
        const conpass=control.get("conformpass");
        if(pass?.pristine && conpass?.pristine)
            return null;
        return (pass && conpass && pass.value!=conpass.value)?{erroemsg:"not same"}:null;

    })
}