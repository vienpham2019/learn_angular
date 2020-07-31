import { AbstractControl , ValidatorFn} from '@angular/forms'

export function  forbiddenValidation(forbiddenKey : RegExp):ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        let forbidden = forbiddenKey.test(control.value)
        return forbidden ? null : {'forbidden': {value: control.value}}
    }  
}