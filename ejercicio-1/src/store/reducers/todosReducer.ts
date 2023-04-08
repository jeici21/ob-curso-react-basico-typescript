import { ActionType } from "../actions/actions";

interface Todo { id: number; text: string; completed: boolean; }
type Action = | { type: ActionType.ADD_TODO; payload: { id: number; text: string } }
    | { type: ActionType.TOGGLE_TODO; payload: { id: number } };

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.payload.id, text: action.payload.text, completed: false
            }]
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.payload.id ? {
                ...todo, completed: !todo.completed
            } : todo)
        default:
            return state;
    }
}