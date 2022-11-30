import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Favoritos() {

  const [save, setSave] = useState([])

  useEffect(()=> {
      let humans = JSON.parse(localStorage.getItem("save"))
      setSave( humans )
  },[])
  
  const nav = useNavigate()


  return (
    <div className="Favoritos">
      <h1>Favoritos</h1>
      <button onClick={ ()=>{ nav("/")} }> Volver </button>

      {
        save.map( (human, index) => 
          <div className="card">
            <img src={ !human.picture ? "" :human.picture.large} alt=""/>
            <h2> { !human.name 
                      ? "" 
                      :`${human.name.title} ${human.name.first} ${human.name.last}` }</h2>
            <h2> { !human.gender ? "" :human.gender } </h2>
            <button onClick={() =>{
              save.splice(index,1)
            }}> Borrar </button>
          </div>
        )
      }      

    </div>
  )
}
//brenda.acosta@gse.com.co
//omar.moreno@gse.com.co




export default Favoritos
