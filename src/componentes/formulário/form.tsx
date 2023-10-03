import React from 'react'

const form = () => {
  return(
    <div>
      <form>
        <div>
          <label htmlFor ="tarefa"> Tarefa </label>
        </div>
        <div>
          <input type="text" name="Tarefa" id="tarefa" placeholder="O que voçe vai fazer hoje?" required/>
        </div>
        <div>
          <label htmlFor="tempo"> Tempo </label>
        </div>
        <div> 
          <input type="time" step = {1} name="tempo" id="tempo" min='00:00:00' max='00:00:00'/>
        </div>
      </form>    
    </div>
  )
  
}



export default form;