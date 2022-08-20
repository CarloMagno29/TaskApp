import { useContext } from "react"
import {TaskContext} from '../context/TaskContext'

function TaskCard({hw}) {
    

    const {deleteTask} = useContext(TaskContext)
    
    return (

         

        <div className="bg-gray-800 text-white p-4 rounder-md">
            <h1 className="text-xl font-bold capitalize">{hw.title}</h1>
            <p className="text-gray-500 text-sm">{hw.description}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={()=> deleteTask(hw.id)}> Borrar Tarea</button>
        </div>

    )

}

export default TaskCard;