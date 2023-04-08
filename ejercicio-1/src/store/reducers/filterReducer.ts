import { ActionType } from "../actions/actions";

type Action = { type: ActionType.SET_VISIBILITY_FILTER; payload: { filter: string } };

export const filterReducer = (state = 'SHOW_ALL', action: Action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': return action.payload.filter
        default: return state;
    }
}