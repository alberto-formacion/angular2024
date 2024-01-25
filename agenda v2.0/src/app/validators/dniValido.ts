import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function dniValido(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const value  = control.value;
        if(!value) return null;
        if(value.length === 0) return null;

        if(value.length != 9) return {dniNoValido:{
            message: `El DNI debe tener 8 numeros y una letra`
        }};

        const letra = value.charAt(value.length - 1);
        const numero = value.substring(0,value.length - 1);

        console.log(letra);
        console.log(typeof letra);

        if(!isNaN(letra)){
            return {dniNoValido:{
                message: `El ultimo caracter del DNI debe ser una letra`
            }};
        }

        if(isNaN(parseInt(numero))){
            return {dniNoValido:{
                message: `El DNI debe estar compuesto por ocho numeros y una letra`
            }};
        }

        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        const resto = parseInt(numero) % 23;

        if(letra.toUpperCase() != letras[resto]){
            return {dniNoValido:{
                message: `La letra ${letra} no es correcta para el DNI ${numero}`
            }};
        }
        return null;
    }
}