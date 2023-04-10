import { useContext } from "react";
import { TaskContext } from "./containers/Context"
import { Task } from "../store/types/types";

const TaskList = () => {
    const { state, dispatch } = useContext(TaskContext);

    const handleDelete = (id: number) => {
        dispatch({ type: "DELETE_TASK", id });
    };

    const handleToggle = (id: number) => {
        dispatch({ type: "TOGGLE_TASK", id });
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search tasks"
                onChange={(event) =>
                    dispatch({ type: "FILTER_TASKS", keyword: event.target.value })
                }
            />
            <ul>
                {state.filteredTasks.map((task: Task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggle(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskList;