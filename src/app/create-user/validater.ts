import { AbstractControl } from "@angular/forms";

export function Custvalidators(control:AbstractControl){

    if(control.value.includes('@tcs.com')){
        return null
    }
    else{
        return {'tcsmail':'enter valid mail'}
    }
}