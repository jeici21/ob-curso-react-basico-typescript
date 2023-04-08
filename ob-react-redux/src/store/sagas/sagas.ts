import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios'
import { ApiCalls } from "../actions/asyncActions";

interface HttpRequest { method: string; url: string; data?: object;}
export interface HttpResponse {data: {token: string}}
interface ApiCallRequestAction {
    type: typeof ApiCalls.API_CALL_REQUEST, payload: { request: HttpRequest, okAction: string, failAction: string }
}

//Watcher SAGA
//Listens the API_CALL_REQUEST actions
export function* watcherSaga() {
    //Listen the action and starts a Worker Saga
    yield takeLatest(ApiCalls.API_CALL_REQUEST, workerSaga)
}

//WORKER SAGA
//Is called from watcherSaga, does the Login and Dispatches an action
export function* workerSaga(action: ApiCallRequestAction) {
    try {
        const response: HttpResponse = yield call(fetchHttp(action.payload.request))
        //We Obtain the token from response
        const token = response.data.token
        yield put({
            type: action.payload.okAction, //API_CALL_SUCCESS
            payload: { token }
        })
    } catch (error) {
        yield put({
            type: action.payload.failAction, //API_CALL_FAILURE
            payload: { error }
        })
    }
}

function fetchHttp(request: HttpRequest) {
    return function () {
        return axios(request)
    }
}