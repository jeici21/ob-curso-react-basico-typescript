import { FormEvent, useState } from "react"

type LoginProps = { username: string, password: string }

const LoginUseState = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const submit = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)
        try {
            await function login({ username, password }: LoginProps) {
                new Promise<void>((resolve, reject) => {
                    setTimeout(() => {
                        if (username === 'admin' && password === 'admin') {
                            resolve()
                        } else {
                            reject()
                        }
                    }, 2000)
                })
            }
            setIsLoggedIn(true)
            setIsLoading(false)
        } catch (error) {
            setError(`Invalid Username or Password: ${error}`)
            setIsLoading(false)
            setUsername('')
            setPassword('')
        }
    }

    const logout = () => {
        setIsLoggedIn(false)
        setIsLoading(false)
    }

    return (
        <div className="App">
            <div>{isLoggedIn ? (
                <div>
                    <h1>Welcome, {username}</h1>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={submit}>
                    {error && <p style={{ color: 'tomato' }}>{error}</p>}
                    <input type="text" placeholder="Username" value={username}
                        onChange={e => setUsername(e.currentTarget.value)} />
                    <input type="text" placeholder="Password" value={password}
                        onChange={e => setPassword(e.currentTarget.value)} />
                    <button type="submit">{isLoading ? 'Logging...' : 'Login'}</button>
                </form>
            )}</div>
        </div>
    )
}

export default LoginUseState