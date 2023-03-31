/**
 * Componente que va a contener un formulario para
 * autenticación de usuarios
*/
import { useState } from "react"

export const loginForm = () => {
    const initialCredentials = [
        { user: '', password: '' }
    ]
    const [credentials, setCredentials] = useState([initialCredentials])

    return (
        <div>loginForm</div>
    )
}