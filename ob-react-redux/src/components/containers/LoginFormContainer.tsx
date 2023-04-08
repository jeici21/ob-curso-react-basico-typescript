import { connect } from 'react-redux'
import LoginForm from '../pure/LoginForm'
import { httpRequest } from '../../store/actions/asyncActions'
import { Dispatch } from 'redux'

type State = { userState: { logged: boolean, fetching: boolean } }

const mapStateToProps = (state: State) => {
    return {
        logged: state.userState.logged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onLogin: (email: string, password: string) => {
            const data = { email, password }
            const url = 'https://reqres.in/api/login'
            dispatch(httpRequest('post', url, data));
        }
    }
}


const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default LoginFormContainer