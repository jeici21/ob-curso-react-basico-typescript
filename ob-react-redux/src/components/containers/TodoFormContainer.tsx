import { connect } from 'react-redux'
import TodoForm from '../pure/TodoForm'
import { addTodo } from '../../store/actions/actions'
import { Dispatch } from 'redux'

const mapStateToProps = () => ({
    //Not necessary
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        submit: (text: string) => dispatch(addTodo(text))
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer