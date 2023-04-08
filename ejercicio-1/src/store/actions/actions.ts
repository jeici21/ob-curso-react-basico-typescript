let nextTodoID = 1

export enum ActionType {
    ADD_TODO = "ADD_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
}

export const addTodo = (text: string) => {
    return {
        type: ActionType.ADD_TODO,
        payload: { id: nextTodoID++, text }
    }
}

export const toggleTodo = (id: number) => {
    return {
        type: ActionType.TOGGLE_TODO,
        payload: { id }
    }
}

export const setVisibilityFilter = (filter: string) => {
    return {
        type: ActionType.SET_VISIBILITY_FILTER,
        payload: { filter }
    }
}