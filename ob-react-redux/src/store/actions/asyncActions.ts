//Async Action Types
export enum ApiCalls {
    API_CALL_REQUEST = 'API_CALL_REQUEST',//Watcher Saga listens
    API_CALL_SUCCESS = 'API_CALL_SUCCESS',//Dispatched by Worker Saga
    API_CALL_FAILURE = 'API_CALL_FAILURE'//Dispatched by Worker Saga
}

export const login = (email: string, password: string) => {
    return {
        type: ApiCalls.API_CALL_REQUEST,
        payload: {
            request: { method: 'post', url: 'https://reqres.in/api/login', data: { email, password } },
            okAction: ApiCalls.API_CALL_SUCCESS,
            failAction: ApiCalls.API_CALL_FAILURE
        }
    }
}

/**
 * Generic HttpRequest Action dispatcher
 */
export const httpRequest = (method: string, url: string, data: { email: string, password: string }) => {
    return {
        type: ApiCalls.API_CALL_REQUEST,
        payload: {
            request: { method, url, data },
            okAction: ApiCalls.API_CALL_SUCCESS,
            failAction: ApiCalls.API_CALL_FAILURE
        }
    }
}