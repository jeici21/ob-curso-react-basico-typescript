import { useEffect, useState } from "react"

const Cuadrado = () => {
    const [color, setColor] = useState('black')
    const [esColorNuevo, setEsColorNuevo] = useState(false)

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (esColorNuevo) {
                setColor(`rgb(${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)
            }
        }, 1000)

        return () => clearInterval(intervalo)
    }, [esColorNuevo])

    const handleMouseEnter = () => { setEsColorNuevo(true) }
    const handleMouseLeave = () => { setEsColorNuevo(false) }
    const handleDoubleClick = () => { setEsColorNuevo(false) }

    return (
        <div style={{ width: "255px", height: "255px", background: color }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick} />
    )
}

export default Cuadrado