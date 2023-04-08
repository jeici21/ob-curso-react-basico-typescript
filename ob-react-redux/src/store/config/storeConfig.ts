import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
    let store = configureStore({
        reducer: rootReducer,
        devTools: true, // habilita la extensión de Redux DevTools
    });
    return store;
};

export const createAppAsyncStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    let store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
        devTools: true
    });

    //We init the Watcher Saga
    sagaMiddleware.run(watcherSaga)
    return store;
};