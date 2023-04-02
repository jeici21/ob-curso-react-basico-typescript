import { useParams } from "react-router-dom";

interface TaskDetailPageProps { task: { id: number, name: string, description: string } | undefined; }

const TaskDetailPage = ({ task }: TaskDetailPageProps) => {
    const { id } = useParams()

    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2>{task?.name}</h2>
            <h3>{task?.description}</h3>
        </div>
    )
}

export default TaskDetailPage