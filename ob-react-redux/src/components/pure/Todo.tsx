type TodoProps = {
    onClick(): Required<void>, completed: Required<boolean>, text: Required<string>, id: Required<number>
}

const Todo = ({ onClick, completed, text, id }: TodoProps) => {
    return (
        <li onClick={onClick} style={{
            textDecoration: completed ? 'line-though' : 'none',
            textDecorationColor: completed ? 'green' : 'none',
            color: completed ? 'green' : 'white'
        }}>
            {id} - {text}
        </li>
    )
}

export default Todo