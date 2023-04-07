import { ConnectedProps, connect } from 'react-redux'
import { Dispatch } from 'redux';
//Actions
import TodoList from '../pure/TodoList'
import { toggleTodo } from '../../store/actions/actions'

interface Todo { id: number; text: string; completed: boolean; }
interface AppState { todosState: Todo[]; filterState: string; }
type PropsFromRedux = ConnectedProps<typeof connector>;

//Filter Todo List
const filterTodos = (todos: Todo[], filter: string) => {
    switch (filter) {
        case 'SHOW_ALL': return todos
        case 'SHOW_ACTIVE': return todos.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED': return todos.filter(todo => todo.completed)
        default: return todos;
    }
}
const mapStateToProps = (state: AppState) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onTodoClick: (id: number) => dispatch(toggleTodo(id))
    }
}

//We connect State & Dispatch to TodoList's Props
const connector = connect(mapStateToProps, mapDispatchToProps);

const TodosContainer = ({ todos, onTodoClick }: PropsFromRedux) => {
    return <TodoList todos={todos as [Required<Todo>]} onTodoClick={onTodoClick} />;
};

export default connector(TodosContainer);