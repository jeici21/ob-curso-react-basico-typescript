/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    componentDidUpdate(): void {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado");
    }

    render() {
        return (
            <div>DidUpdate</div>
        )
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado");
    })

    return (
        <div>DidUpdate</div>
    )
}