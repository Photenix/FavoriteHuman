import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Favoritos() {

  let humans = JSON.parse(localStorage.getItem("save"))
  if( humans === null ) humans = []

  const [save, setSave] = useState(humans)
  
  const handleSave = () =>{
    localStorage.setItem("save", JSON.stringify(save) )
  }

  const handleErase = () =>{
    const newSave = save
    setSave( newSave )
    handleSave()
  }
  
  const nav = useNavigate()


  return (
    <div className="favoritos">
      <h1>Favoritos</h1>
      <button onClick={ ()=>{ nav("/")} }> Volver </button>

      {
        save.map( (human, index) => 
          <div className="card" id={index} >
            <img src={ !human.picture ? "" :human.picture.large} alt=""/>
            <h2> { !human.name 
                      ? "" 
                      :`${human.name.title} ${human.name.first} ${human.name.last}` }</h2>
            <h2> { !human.gender ? "" :human.gender } </h2>
            <button onClick={() =>{
              document.getElementById(index).remove()
              save.splice(index,1)
              handleErase()
            }}> Borrar </button>
          </div>
        )
      }      

    </div>
  )
}

export default Favoritos
