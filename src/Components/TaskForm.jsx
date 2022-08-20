
import { useState, useContext } from "react"
import {TaskContext} from '../context/TaskContext'
// kjlk
function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {createTask} = useContext(TaskContext)
    
    const fnOnChangeTitle = (e) => setTitle(e.target.value);

    const fnOnChangeDescription = (e) => setDescription(e.target.value);

   
    const handleSubmit = (e) => {
        e.preventDefault(); //ayuda a evitar el comportamiento por defecto de recargar la pagina para poder ver el console.log

        createTask({

            title,
            description
        
        })
        setTitle(''),
        setDescription('')
    };

    return (
        <>
       <div className=" max-w-md mx-auto">

        <form  onSubmit={handleSubmit}   className='bg-slate-800 p-10 pt-10 mb-4 '>
            <h1 className="text-2xl font-bold text-white mb-3">Anota tu Tarea</h1>
            <input placeholder="Ingresa tu tarea"
                onChange={fnOnChangeTitle}
                value={title}
                autoFocus
                required
                className="bg-slate p-3 w-full mb-2"
            />
            
            <textarea placeholder="Describe tu tarea"
                onChange={fnOnChangeDescription}
                value={description}
                className="bg-slate p-3 w-full mb-2"
                cols="35" rows="5"></textarea>
            
            <button className="bg-indigo-500 px-4 py-1 text-white">Guardar</button>
        </form>
       </div>
        </>
    )
}

export default TaskForm;