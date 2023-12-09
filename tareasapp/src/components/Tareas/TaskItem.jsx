import React from 'react';

const TaskItem = ({tarea, handleDelete, handleComplete}) => {
    
    return (
        <div className={tarea.completada? "text-bg-success card m-2" : "text-bg-secondary card m-2"}>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="">{tarea.titulo}</h5>    
                    <div className='d-flex'>
                        <button className={tarea.completada? 'btn btn-sm btn-dark mx-3 disabled' : 'btn btn-sm btn-success mx-3'} onClick={() => handleComplete(tarea.id)}>Hecho</button>
                        <button className='btn btn-sm btn-danger mx-3' onClick={() => handleDelete(tarea.id)}>Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
