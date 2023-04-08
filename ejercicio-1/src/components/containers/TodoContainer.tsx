import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../TodoList';

type Todos = { id: number, text: string, completed: boolean }
type State = { todosState: Todos[], filterState: string }

const filterTodos = (todos: Todos[], filter: string) => {
    switch (filter) {
        case 'SHOW_ALL': return todos;
        case 'SHOW_ACTIVE': return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED': return todos.filter((todo) => todo.completed);
        default: return todos;
    }
}

const mapStateToProps = (state: State) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onTodoClick: (id: number) => dispatch(toggleTodo(id))
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer;