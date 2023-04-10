import { FormEvent, useReducer } from "react"

//Actions
enum Actions {
    FIELD = 'FIELD', LOGIN = 'LOGIN', SUCCESS = 'SUCCESS', ERROR = 'ERROR', LOGOUT = 'LOGOUT'
}
type LoginProps = { username: string, password: string }
type State = { username: string, password: string, error: string, isLoading: boolean, isLoggedIn: boolean }
type Action = { type: Actions.FIELD, fieldname: string, payload: string }
    | { type: Actions.LOGIN } | { type: Actions.SUCCESS } | { type: Actions.ERROR } | { type: Actions.LOGOUT }
//INITIAL STATE
const initialState = { username: '', password: '', error: '', isLoading: false, isLoggedIn: false }

//Reducer
const loginReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'FIELD': return {
            ...state,
            [action.fieldname]: action.payload
        }
        case 'LOGIN': return {
            ...state,
            error: '',
            isLoading: true
        }
        case 'SUCCESS': return {
            ...state,
            error: '',
            isLoading: false,
            isLoggedIn: true
        }
        case 'ERROR': return {
            ...state,
            error: 'Invalid Username or Password',
            isLoading: false,
            isLoggedIn: false,
            username: '',
            password: ''
        }
        case 'LOGOUT': return {
            ...state,
            error: '',
            isLoggedIn: false
        }
        default: return state;
    }
}

const LoginUseReducer = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState)

    //Obtain all variables from state
    const { username, password, error, isLoading, isLoggedIn } = state

    //Submit
    const submit = async (e: FormEvent) => {
        e.preventDefault()
        //Dispatch Action:
        dispatch({ type: Actions.LOGIN })
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
            dispatch({ type: Actions.SUCCESS })
        } catch (error) {
            dispatch({ type: Actions.ERROR })
        }
    }

    const logout = () => {
        dispatch({ type: Actions.LOGOUT })
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
                        onChange={e => dispatch({
                            type: Actions.FIELD, fieldname: 'username', payload: e.currentTarget.value
                        })} />
                    <input type="text" placeholder="Password" value={password}
                        onChange={e => dispatch({
                            type: Actions.FIELD, fieldname: 'password', payload: e.currentTarget.value
                        })} />
                    <button type="submit">{isLoading ? 'Logging...' : 'Login'}</button>
                </form>
            )}</div>
        </div>
    )
}

export default LoginUseReducer