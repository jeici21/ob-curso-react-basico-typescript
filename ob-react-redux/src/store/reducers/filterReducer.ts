import { ActionType } from "../actions/actions";

type Action = { type: ActionType.SET_VISIBILITY_FILTER; payload: { filter: string } };
//Initial values for filterState
let initialState = 'SHOW_ALL'

export const filterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': return action.payload.filter
        default: return state;
    }
}