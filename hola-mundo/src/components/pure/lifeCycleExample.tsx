/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import { Component } from 'react'

interface lifeCycleExampleProps { props: string }

export default class lifeCycleExample extends Component {
    constructor(props: lifeCycleExampleProps) {
        super(props)
        console.log("CONSTRUCTOR: Cuando se instancia el componente");
    }

    componentWillMount(): void {
        console.log("WillMount: Antes del montaje del componente");
    }

    componentDidMount(): void {
        console.log("DidMount: Justo al acabar el montaje del componente, antes de renderizarlo");
    }

    componentWillReceiveProps(nextProps: Readonly<{}>): void {
        console.log("WillReceiveProps: Si va a recibir nuevos props");

    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        return true//false
    }

    componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
        console.log("WillUpdate: Justo antes de actualizarse");
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("DidUpdate: Justo después de actualizarse");
    }

    componentWillUnmount(): void {
        console.log("WillUnmount: Justo antes de desaparecer");
    }

    render() {
        return (
            <div>lifeCycleExample</div>
        )
    }
}