import { ErrorMessage, Field, Form, Formik } from "formik"
import { createUser, deleteUserByID, getAllPagedUsers, getAllUsers, getUsersByID, login, updateUserByID } from "../../services/axiosCRUDService"
import * as Yup from 'yup'

interface User { id: number, email: string, first_name: string, last_name: string, avatar: string }
interface AxiosCRUDResponse { data: { token: string, data: User[] }, status: number }
interface LoginValues { email: string, password: string }

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
})

const AxiosCRUDExample = () => {
    const initialCredentials = { email: '', password: '' }

    const authUser = (values: LoginValues) => {
        login(values.email, values.password).then((response: AxiosCRUDResponse) => {
            if (response.data.token) {
                alert(JSON.stringify(response.data.token))
                sessionStorage.setItem('token', response.data.token)
            } else {
                sessionStorage.removeItem('token')
                throw new Error('Login failure')
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`)).finally(() => console.log('Login done'))
    }

    //CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers().then((response: AxiosCRUDResponse) => {
            if (response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
            } else {
                throw new Error('No users found')
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page: number) => {
        getAllPagedUsers(page).then((response: AxiosCRUDResponse) => {
            if (response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
            } else {
                throw new Error(`No users found in page ${page}`)
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserByID = (id: number) => {
        getUsersByID(id).then((response: AxiosCRUDResponse) => {
            if (response.data.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
            } else {
                throw new Error('User not found')
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`))
    }

    const createNewUser = (name: string, job: string) => {
        createUser(name, job).then((response: AxiosCRUDResponse) => {
            if (response.data && response.status === 201) {
                alert(JSON.stringify(response.data))
            } else {
                throw new Error('User not created')
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`))
    }

    const updateUser = (id: number, name: string, job: string) => {
        updateUserByID(id, name, job).then((response: AxiosCRUDResponse) => {
            if (response.data && response.status === 200) {
                alert(JSON.stringify(response.data))
            } else {
                throw new Error('User not found & no update done')
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`))
    }

    const deleteUser = (id: number) => {
        deleteUserByID(id).then((response: AxiosCRUDResponse) => {
            if (response.status === 204) {
                alert(`User with id: ${id} successfully deleted`)
            } else {
                throw new Error('User not found & no delete done')
            }
        }).catch((error: Error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event
                onSubmit={async values => authUser(values)}>
                {/* We obtain props from Formik */}
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />
                        {/* Email Errors */}
                        {errors.email && touched.email && (
                            <ErrorMessage name='email' component='div' />
                        )}
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password" />
                        {/* Password Errors */}
                        {errors.password && touched.password && (
                            <ErrorMessage name='password' component='div' />
                        )}
                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>Get All Users with Axios</button>
                <button onClick={() => obtainAllPagedUsers(1)}>Get All Users (Page 1) with Axios</button>
                <button onClick={() => obtainUserByID(1)}>Get User 1</button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>Create User</button>
                <button onClick={() => updateUser(1, "morpheus", "Developer")}>Update User</button>
                <button onClick={() => deleteUser(1)}>Delete User</button>
            </div>
        </div>
    )
}

export default AxiosCRUDExample