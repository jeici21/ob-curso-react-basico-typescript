import { connect } from 'react-redux'
import { Dispatch } from 'redux';
// Actions
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList';

type Todos = { id: number, text: string, completed: boolean }
type State = { todosState: Todos[], filterState: string }

// Filter Todo List
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
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id))
        }
    }
}

// We connect State & Dispach to TodoList's Props 
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;