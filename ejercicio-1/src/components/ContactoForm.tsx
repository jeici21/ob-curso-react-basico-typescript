import { FormEvent, useRef } from "react"
import { Contacto } from "../classes/Contacto.class"

interface ContactoFormProps { agregar(contacto: Contacto): void }

const ContactoForm = ({ agregar }: ContactoFormProps) => {
    const nombreRef = useRef<HTMLInputElement>(null)
    const apellidoRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const estadoRef = useRef<HTMLSelectElement>(null)

    function añadirContacto(e: FormEvent) {
        e.preventDefault()
        const nuevoContacto = new Contacto(
            nombreRef.current?.value as string,
            apellidoRef.current?.value as string,
            emailRef.current?.value as string,
            estadoRef.current?.value === 'Conectado'
        )
        agregar(nuevoContacto)
    }

    return (
        <div className="contactoform-container">
            <h1>Crear nuevo contacto</h1>
            <form onSubmit={añadirContacto} className="contactoform-form">
                <label htmlFor="contacto-nombre">Nombre</label>
                <input ref={nombreRef} type="text" id='contacto-nombre' />
                <label htmlFor="contacto-apellido">Apellido</label>
                <input ref={apellidoRef} type="text" id='contacto-apellido' />
                <label htmlFor="contacto-email">Email</label>
                <input ref={emailRef} type="text" id='contacto-email' />
                <label htmlFor="contacto-estado">Estado</label>
                <select ref={estadoRef} defaultValue="Conectado" id='contacto-estado'>
                    <option value="Conectado">Conectado</option>
                    <option value="Desconectado">Desconectado</option>
                </select>
                <button>Agregar contacto</button>
            </form>
        </div>
    )
}

export default ContactoForm