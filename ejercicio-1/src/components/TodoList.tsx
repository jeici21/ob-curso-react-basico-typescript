import Todo from "./Todo"

type TodoListProps = {
    todos: Required<{ id: number, text: string, completed: boolean }[]>, onTodoClick(id: number): Required<void>
}

const TodoList = ({ todos, onTodoClick }: TodoListProps) => {
    return (
        <div>
            <h1>Your TODOs</h1>
            <ul>
                {todos.map((todo, index) => {
                    return <Todo key={index} {...todo} onClick={() => onTodoClick(todo.id)} />
                })}
            </ul>
        </div>
    )
}

export default TodoList