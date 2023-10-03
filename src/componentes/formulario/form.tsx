import React from 'react'

const  Formulario = () =>{
  return(
    <div>
      <form>
        <div>
          <label htmlFor="Tarefa"></label>
        </div>
        <div>
          <input type="text" 
            name = "tarefa"
            id = "tarefa"
            placeholder = "Informe a tarefa"
            required
            />
        </div>
        <div>
          <label htmlFor="tempo"></label>
        </div>
        <div>
          <input type="time" name= 'time' step= '1' id='time' min = '00:00' max = '00:00:00'/>
           
        </div>
      </form>
      </div>
  )
}

export default Formulario;