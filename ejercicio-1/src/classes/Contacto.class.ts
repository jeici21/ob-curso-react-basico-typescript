export class Contacto {
    nombre
    apellido
    email
    conectado
    
    constructor(nombre: string, apellido: string, email: string, conectado: boolean) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.conectado = conectado
    }
}