import { useRef } from "react"

type TodoFormProps = { submit(newText: string): Required<void> }

const TodoForm = ({ submit }: TodoFormProps) => {
    const newText = useRef<HTMLInputElement>(null)
    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={e => {
                e.preventDefault()
                submit(newText.current?.value || '')
            }}>
                <input type="text" ref={newText} />
                <button type="submit">Create Todo</button>
            </form>
        </div>
    )
}

export default TodoForm