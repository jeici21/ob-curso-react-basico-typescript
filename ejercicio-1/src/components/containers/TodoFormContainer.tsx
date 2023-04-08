import { connect } from 'react-redux'
import TodoForm from '../TodoForm'
import { addTodo } from '../../store/actions/actions'
import { Dispatch } from 'redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        submit: (text: string) => dispatch(addTodo(text))
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer