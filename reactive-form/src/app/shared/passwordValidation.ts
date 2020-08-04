import { AbstractControl } from '@angular/forms'

export function passwordValidation(control: AbstractControl): {[key: string]: boolean} | null {
    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')
    if(password.pristine || confirmPassword.pristine){
        return null 
    }

    return password && confirmPassword && password.value !== confirmPassword.value ? {'notMatch' : true} : null 
}