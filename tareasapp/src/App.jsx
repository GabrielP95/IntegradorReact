import TaskList from './components/Tareas/TaskList'
import TaskForm from './components/Tareas/TaskForm.jsx'
import React, { useState, useEffect } from 'react';


function App() {

  const [identificador, setIdentificador] = useState(0)
  const [tarea, setTarea] = useState('');
  
  const [lista, setLista] = useState(() => {
    const guardarLista = window.localStorage.getItem('TareasData');
    if(guardarLista && JSON.parse(guardarLista)[0]){
      setIdentificador((JSON.parse(guardarLista)[0].id)+1)
      return JSON.parse(guardarLista);
    } else{
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem('TareasData', JSON.stringify(lista))
  }, [lista]);
  
  function handleSubmit(event) {
    event.preventDefault()
    if(tarea===''){
      alert('No escribiste ninguna tarea')
    } else {
      setIdentificador(identificador + 1)
      
      const nuevaTarea = {
        id: identificador,
        titulo: tarea,
        completada: false,
      }

      setLista([nuevaTarea, ...lista])

      setTarea('')

    }


  }

  function handleChange(event){
    setTarea(event.target.value)
  }

  function handleDelete(id){
    setLista(lista.filter(tarea => tarea.id!== id))
  }

  function handleComplete(id){
    setLista(lista => lista.map(tarea => tarea.id=== id ? {...tarea, completada:!tarea.completada} : tarea))
  }

  return (
    <div className='container-fluid' style={{maxWidth:'720px'}}>
      <TaskForm tarea={tarea} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <TaskList lista={lista} handleDelete={handleDelete} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
