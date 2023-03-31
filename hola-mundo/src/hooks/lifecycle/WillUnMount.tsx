/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso del hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount(): void {
        console.log("Comportamiento antes de que el componente desaparezca");
    }

    render() {
        return (
            <div>WillUnMount</div>
        )
    }
}

export const WillUnMountHook = () => {
    useEffect(() => {
        //aquí no ponemos nada
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca");
        }
    }, [])


    return (
        <div>WillUnMount</div>
    )
}