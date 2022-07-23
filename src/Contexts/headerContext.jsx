import { createContext, useState } from "react";
import {default as data} from "../data/tasks.json";


export const HeaderContext = createContext();

export const HeaderContextProvider = ({children}) => {
    const [tasks, setTasks] = useState(data);

    const handleChange = (id, value, key) => {
        setTasks(tasks.map((ele) => {
            if(id === ele.id) {
                ele[key] = value;
                return ele;
            };

            return ele;
        }))
    }

    return (
        <HeaderContext.Provider value={{tasks, setTasks, handleChange}}>{children}</HeaderContext.Provider>
    )
};
