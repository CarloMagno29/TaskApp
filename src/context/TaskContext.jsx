//hoks
import { createContext, useState, useEffect } from 'react'
//
import { taskInfo as data } from '../Components/taks'

export const TaskContext = createContext()

export function TaskContextProvider({ children }) {
    const [tarea, setTarea] = useState([])


    // Para setear la data de tareas al estado
    useEffect(() => {
        setTarea(data)
    }, [])

    // funcion que crea tarea 
    const createTask = (task) => {

        setTarea([...tarea, {
            title: task.title,
            id: tarea.length,
            description: task.description
        }])
    };

    // funcion que elimina tarea por id
    const deleteTask = (taskId) => {

        setTarea(tarea.filter(t => t.id !== taskId))

    }
    return (
        <>
            <TaskContext.Provider
            value={{
                tarea,
                deleteTask,
                createTask,
            }}>
                 {children}

            </TaskContext.Provider>
        </>
    )


}

export default TaskContext