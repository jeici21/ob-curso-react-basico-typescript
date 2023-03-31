/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 */

import { Component, useEffect } from 'react'

export class DidMount extends Component {
    componentDidMount(): void {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }

    render() {
        return (
            <div>DidMount</div>
        )
    }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }, [])

    return (
        <div>DidMount</div>
    )
}