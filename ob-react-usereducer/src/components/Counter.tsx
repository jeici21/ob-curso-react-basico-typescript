import { createContext, useContext, useReducer } from "react"

//Actions
enum Actions { INCREMENT = 'INCREMENT', DECREMENT = 'DECREMENT', RESET = 'RESET' }
type State = { count: number }
type Action = { type: Actions.INCREMENT, payload: { quantity: number } }
    | { type: Actions.DECREMENT, payload: { quantity: number } } | { type: Actions.RESET }

const myContext = createContext<State | null>(null)

const Points = () => {
    const state = useContext(myContext)
    return <p>Points: {state?.count}</p>
}

const Counter = () => {
    //Initial State for Reducer
    const initialState = { count: 0 }

    //Reducer to change State
    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case 'INCREMENT': return { count: state.count + action.payload.quantity }
            case 'DECREMENT': return { count: state.count - action.payload.quantity }
            case 'RESET': return { count: 0 }
            default: return state;
        }
    }

    //Asign useReducer to state, reducer and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <myContext.Provider value={state}>
            <div>
                <Points />
                <button onClick={() => dispatch({
                    type: Actions.INCREMENT, payload: { quantity: 2 }
                })}>INCREMENT</button>
                <button onClick={() => dispatch({
                    type: Actions.DECREMENT, payload: { quantity: 1 }
                })}>DECREMENT</button>
                <button onClick={() => dispatch({ type: Actions.RESET })}>RESET</button>
            </div>
        </myContext.Provider>
    )
}

export default Counter