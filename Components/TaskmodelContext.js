import React, { createContext, useEffect, useState } from "react"

export const Context = createContext()

export const TaskProvider = ({children}) => {
    const [tasks, settasks] = useState([
        {
            key: "1",
            name: "Lecture 1",
        },
        {
            key: "2",
            name: "Lecture 2",
        }, {
            key: "3",
            name: "Lecture 3",
        }, {
            key: "4",
            name: "Lecture 4",
        }, {
            key: "5",
            name: "Lecture 5",
        }, {
            key: "6",
            name: "Lecture 6",
        }
    ])

    useEffect(() => {
        let mount = true;

        return () => {
            mount = false;
        }
    }, [tasks]);

    return(
        <Context.Provider value={[tasks, settasks]}>
            {children}
        </Context.Provider>
    )
}

export default Context