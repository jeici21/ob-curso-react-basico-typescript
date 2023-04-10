import { State, Action } from "../types/types"

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.task],
                filteredTasks: [...state.tasks, action.task],
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id),
                filteredTasks: state.filteredTasks.filter(
                    (task) => task.id !== action.id
                ),
            };
        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.id ? { ...task, completed: !task.completed } : task
                ),
                filteredTasks: state.filteredTasks.map((task) =>
                    task.id === action.id ? { ...task, completed: !task.completed } : task
                ),
            };
        case "FILTER_TASKS":
            const filteredTasks = state.tasks.filter((task) =>
                task.title.toLowerCase().includes(action.keyword.toLowerCase())
            );
            return {
                ...state,
                filteredTasks,
            };
        default:
            return state;
    }
};

export default reducer;