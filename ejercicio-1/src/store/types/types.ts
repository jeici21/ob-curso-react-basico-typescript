export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export interface State {
    tasks: Task[];
    filteredTasks: Task[];
}

export type Action =
    | { type: "ADD_TASK"; task: Task }
    | { type: "DELETE_TASK"; id: number }
    | { type: "TOGGLE_TASK"; id: number }
    | { type: "FILTER_TASKS"; keyword: string };