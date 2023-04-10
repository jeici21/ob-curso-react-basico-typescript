import React, { createContext, useReducer, ReactNode } from "react";
import reducer from "../../store/reducers/reducer";
import { State, Action } from "../../store/types/types";

const initialState: State = { tasks: [], filteredTasks: [], };

export interface ContextProps { state: State; dispatch: React.Dispatch<Action>; children: ReactNode; }

export const TaskContext = createContext({} as ContextProps);

export const TaskProvider = ({ children }: ContextProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch, children }}>
            {children}
        </TaskContext.Provider>
    );
};