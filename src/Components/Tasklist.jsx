import { useContext } from 'react' 

import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'

function TaskList( ) {
        
    const {tarea} = useContext(TaskContext)


    if(tarea.length == 0){
        return <h1 className="text-2xl font-bold text-white mb-3 text-center">No hay tareas pendientes</h1>
    }
    
    return (

        <div className='grid grid-cols-4 gap-2'>
            {tarea.map(hw => {
                return (
                   <TaskCard key={hw.id} hw={hw} /> 
                )
            })}
        </div>
    )

}


export default TaskList;