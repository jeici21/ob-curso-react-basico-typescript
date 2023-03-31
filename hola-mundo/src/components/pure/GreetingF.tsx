import { useState } from 'react'

interface GreetingFProps { name: string }

const GreetingF = (props: GreetingFProps) => {
    //Breve introduccion a useState
    //const [variable, método para actualizarla] = useState(valor inicial)
    const [age, setAge] = useState(29)
    const birthday = () => {
        //actualizamos el State
        setAge(age + 1)
    }

    return (
        <div>
            <h1>¡HOLA {props.name} desde componente funcional!</h1>
            <h2>Tu edad es de: {age}</h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    )
}

export default GreetingF