import { AbstractControl , ValidatorFn } from '@angular/forms'

export function forbiddenValidator (forbiddenKey: RegExp , reverse: boolean = false): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        let forbidden = forbiddenKey.test(control.value)
        if(reverse){
            return forbidden ? null : {'forbidden': {value: control.value}} 
        }else{
            return forbidden ? {'forbidden': {value: control.value}} : null 
        }
    }
}