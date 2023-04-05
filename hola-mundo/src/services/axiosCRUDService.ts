import axios from 'axios'

/**
 * Login Method to ReqRes endpoint
 * @param { string } email
 * @param { string } password
*/
export const login = (email: string, password: string) => {
    let body = { email, password }

    //Returns the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
}

//Obtain All Users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

//Obtain All paged users
export const getAllPagedUsers = (page: number) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//Obtain User by ID
export const getUsersByID = (id: number) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//Create User
export const createUser = (name: string, job: string) => {
    let body = { name, job }

    //Returns the response with a Promise
    return axios.post('https://reqres.in/api/users', body)
}

//Update User
export const updateUserByID = (id: number, name: string, job: string) => {
    let body = { name, job }

    //Returns the response with a Promise
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//Delete User
export const deleteUserByID = (id: number) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}