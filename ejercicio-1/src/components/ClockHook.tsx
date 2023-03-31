import { useEffect, useState } from "react";
import '../styles/clock.scss';

const ClockHook = () => {
    const [state, setState] = useState({
        // Se genera una fecha como estado inicial del componente 
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });

    useEffect(() => {
        const timerID = window.setInterval(
            () => tick(), 1000
        );

        return () => {
            clearInterval(timerID);
        }
    }, []);

    return (
        <div>
            <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )

    function tick() {
        setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }
}

export default ClockHook