import { useState } from "react"

export const registerForm = () => {
    const initialData = [
        { user: '', name: '', email: '', password: '' }
    ]
    const [data, setData] = useState([initialData])

    return (
        <div>registerForm</div>
    )
}