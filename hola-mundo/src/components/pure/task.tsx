import { useEffect } from 'react';
//Models
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/test.class'
//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

interface TaskComponentProp {
    task: Required<Task>,
    complete(tarea: Task): Required<void>,
    remove(tarea: Task): Required<void>
}

const TaskComponent = ({ task, complete, remove }: TaskComponentProp) => {
    useEffect(() => {
        console.log('Created task');

        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task])

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>)
            case LEVELS.URGENT:
                return (<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>)
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>)
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action'
                style={{ color: "green" }} />)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action'
                style={{ color: "grey" }} />)
        }
    }

    return (
        <tr className={`fw-normal ${task.completed ? 'task-completed' : 'task-pending'}`}>
            <th><span className='ms-2'>{task.name}</span></th>
            <td className='align-middle'><span>{task.description}</span></td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' onClick={() => remove(task)}
                    style={{ color: 'tomato', fontSize: '20px' }} />
            </td>
        </tr>
    )
}

export default TaskComponent