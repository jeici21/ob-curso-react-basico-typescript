import { useState } from 'react';
import { Contacto } from '../classes/Contacto.class';
import ContactoComponent from './ContactoComponent';
import ContactoForm from './ContactoForm';

const ContactoList = () => {
    const contacto1 = new Contacto("Jorge", "Castro", "david92_jc@yahoo.es", false);
    const contacto2 = new Contacto("Erick", "Vargas", "erick97@gmail.com", false);
    const contacto3 = new Contacto("Dayanna", "Marcillo", "dayi2013@outlook.com", false);
    const [contactos, setContactos] = useState([contacto1, contacto2, contacto3])

    function añadirContacto(contacto: Contacto) {
        console.log("Añadiendo contacto:", contacto);
        const contactosTemp = [...contactos]
        contactosTemp.push(contacto)
        setContactos(contactosTemp)
    }

    function cambiarEstado(contacto: Contacto) {
        console.log("Cambiar estado del contacto:", contacto);
        const index = contactos.indexOf(contacto)
        const contactosTemp = [...contactos]
        contactosTemp[index].conectado = !contactosTemp[index].conectado
        setContactos(contactosTemp)
    }

    function borrarContacto(contacto: Contacto) {
        console.log("Borrando contacto:", contacto);
        const index = contactos.indexOf(contacto)
        const contactosTemp = [...contactos]
        contactosTemp.splice(index, 1)
        setContactos(contactosTemp)
    }

    return (
        <div className='contactolist-container'>
            <h1>Contactos</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Estado</th>
                </tr>
                {contactos.map((contacto, index) => {
                    return (
                        <ContactoComponent key={index} contacto={contacto} estado={cambiarEstado}
                        borrar={borrarContacto} />
                    )
                })}
            </table>
            <ContactoForm agregar={añadirContacto} />
        </div>
    )
}

export default ContactoList