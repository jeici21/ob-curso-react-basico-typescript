import { FormEvent, useRef } from "react"
import { LEVELS } from "../../../models/levels.enum"
import { Task } from "../../../models/test.class"

interface TaskFormProps { add(tarea: Task): Required<void>, length: Required<number> }

const TaskForm = ({ add, length }: TaskFormProps) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const levelRef = useRef<HTMLSelectElement>(null)

  function addTask(e: FormEvent) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current?.value as string,
      descriptionRef.current?.value as string,
      false,
      levelRef.current?.value as LEVELS
    )
    add(newTask)
  }

  const normalStyle = {
    color: 'blue',
    fontWeight: 'bold'
  }

  const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold'
  }

  const blockingStyle = {
    color: 'tomato',
    fontWeight: 'bold'
  }

  return (
    <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input ref={nameRef} id='inputName' type='text' className="form-control form-control-lg"
          required autoFocus placeholder="Task Name" />
        <input ref={descriptionRef} id='inputDescription' type='text' required
          className="form-control form-control-lg" placeholder="Task description" />
        <select className="form-control form-control-lg" ref={levelRef} defaultValue={LEVELS.NORMAL}
          id='selectLevel'>
          <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
          <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
          <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type="submit" className="btn btn-success btn-lg ms-2">
          {length > 0 ? 'Add New Task' : 'Create your First Task'}
        </button>
      </div>
    </form>
  )
}

export default TaskForm