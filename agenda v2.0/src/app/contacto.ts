export class Contacto {
    constructor(
        public dni: string,
        public nombre: string,
        public apellidos: string,
        public telefono: string,
        public email: string,
        public importante: boolean,
        public fechaAlta?: Date

    ){}
}