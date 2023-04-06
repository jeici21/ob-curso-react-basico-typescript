//Incremental ID for TODOS
let nextTodoID = 0

//Action Types
export enum ActionType {
    ADD_TODO = "ADD_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
}

/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text: string) => {
    return {
        type: ActionType.ADD_TODO, 
        payload: { 
            id: nextTodoID++, 
            text 
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id: number) => {
    return {
        type: ActionType.TOGGLE_TODO, 
        payload: { id }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter: string) => {
    return {
        type: ActionType.SET_VISIBILITY_FILTER, 
        payload: { filter }
    }
}