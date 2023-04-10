import { useState, useContext } from "react";
import { TaskContext } from "./containers/Context"
import { Task } from "../store/types/types";

const TaskForm = () => {
    const { dispatch } = useContext(TaskContext);

    const [title, setTitle] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const task: Task = { id: Date.now(), title, completed: false };
        dispatch({ type: "ADD_TASK", task });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;