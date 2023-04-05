export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users')
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?:', response.ok);

    //We return the json
    return response.json()
}

export const getAllPagedUsers = async (page: number) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?:', response.ok);

    //We return the json
    return response.json()
}

export const getUserDetails = async (id: number) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?:', response.ok);

    //We return the json
    return response.json()
}

export const login = async (email: string, password: string) => {
    let body = JSON.stringify({ email, password });
    let response = await fetch('https://reqres.in/api/login', {
       /*  method: 'POST',
        mode: "no-cors",
        credentials: "omit",
        cache: 'no-cache',
        headers: { 'Content-type': 'application.JSON' }, */
        body
    })
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?:', response.ok);
    return response.json()
}