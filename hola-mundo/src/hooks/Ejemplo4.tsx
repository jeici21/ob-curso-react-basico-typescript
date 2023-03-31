/**
 * Ejemplo para entender el uso de props.children
*/

import { ReactNode } from "react"

interface Ejemplo4Props { nombre: string, children?: ReactNode }

const Ejemplo4 = (props: Ejemplo4Props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>Nombre: {props.nombre}</h2>
            {/* props.children pintará por defecto
        aquello que se encuentre entre las etiquetas de apertura y cierre
        de este componente de orden superior */}
            {props.children}
        </div>
    )
}

export default Ejemplo4