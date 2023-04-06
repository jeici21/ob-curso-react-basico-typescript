import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";

export const createAppStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true, // habilita la extensión de Redux DevTools
    });
    return store;
};