import { useState } from "react"
import Child from "../pure/child"

const Father = () => {
    const [name, setName] = useState('Martín')

    function showMessage(text: string) {
        alert(`Message received: ${text}`)
    }

    function updateName(newName: string) {
        setName(newName)
    }

    return (
        <div style={{ background: 'tomato', padding: '10px' }}>
            <Child name={name} send={showMessage} update={updateName} />
        </div>
    )
}

export default Father 