import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const nombresNoValidos = [
    "ALBERTO",
    "DIOS",
    "JAIMITO"
]

export function nombresProhibidos(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const value  = control.value;
        if(!value) return null;
        if(value.length === 0) return null;
        if(nombresNoValidos.includes(value.toUpperCase().trim())){
            if(!value) return null;
            return {nombreProhibido:{
                message: `El nombre no puede ser ${value}`
            }};
        }
        return null;
    }
}

