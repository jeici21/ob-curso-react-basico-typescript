import { Contacto } from "../classes/Contacto.class"

interface ContactoComponentProps {
    contacto: Contacto,
    estado(contacto: Contacto): void
    borrar(contacto: Contacto): void
}

const ContactoComponent = ({ contacto, estado, borrar }: ContactoComponentProps) => {

    function estadoContacto() {
        if (contacto.conectado) {
            return (
                (<p className="contactocomponent-estado" onClick={() => estado(contacto)}
                    style={{ color: "green", cursor: "pointer" }}>Conectado</p>))
        } else {
            return (
                (<p className="contactocomponent-estado" onClick={() => estado(contacto)}
                    style={{ color: "red", cursor: "pointer" }}>Desconectado</p>))
        }
    }

    return (
        <tr>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellido}</td>
            <td>{contacto.email}</td>
            <td>
                {estadoContacto()}
                <button onClick={() => borrar(contacto)}>Borrar contacto</button>
            </td>
        </tr>
    )
}

export default ContactoComponent