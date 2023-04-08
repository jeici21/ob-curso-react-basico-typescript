import { ApiCalls } from "../actions/asyncActions";

type Action = { type: ApiCalls.API_CALL_REQUEST }
    | { type: ApiCalls.API_CALL_SUCCESS, payload: { token: string } }
    | { type: ApiCalls.API_CALL_FAILURE; payload: { error: string; }; }

//Initial State for userState
const initialState = { fetching: false, token: null, error: null, logged: false }

export const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'API_CALL_REQUEST':
            return { ...state, fetching: true, token: null, error: null, logged: false }
        case 'API_CALL_SUCCESS':
            return { ...state, fetching: false, token: action.payload.token, error: null, logged: true }
        case 'API_CALL_FAILURE':
            return { ...state, fetching: false, token: null, error: action.payload.error, logged: false }
        default:
            return state
    }
}