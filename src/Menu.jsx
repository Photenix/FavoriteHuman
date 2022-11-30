import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const [count, setCount] = useState(0)
    const [human, setHuman] = useState({})
    const [save, setSave] = useState([])

    const [numFavorite, setNumFavorite] = useState(0)

    useEffect(()=>{
        console.log( save.length )
        setNumFavorite( save.length ) 
    }, [save])

    useEffect(
        ()=>{
        axios.get("https://randomuser.me/api/")
            .then( response => response.data)
            .then( obj => {
            setHuman(obj.results[0])
            console.log( human )
            })
        }
    ,[count])

    useEffect( 
    ()=>{
        let humans = JSON.parse(localStorage.getItem("save"))
        setSave( humans )
    },[])

    const handleSave = () =>{
        if ( human != {} ){
            save.push(human)
            localStorage.setItem("save", JSON.stringify(save))
        }
    }

    const handleNext = () =>{
        setCount(count => count + 1)
    }

    const nav = useNavigate()

    return (
        <div>
            <div className='info'>
                <h2>Numero de personas favoritas</h2>
                <h3> { numFavorite }</h3>
                <button onClick={ ()=>{ nav("/like")} }> Mirar cuales </button>
            </div>

            <h1>Busca a un humano</h1>
            <p>by: JM4P1R0</p>
            <img src={ !human.picture ? "" :human.picture.large } alt="" />
            <h2> { !human.name 
                    ? "" 
                    :`${human.name.title} ${human.name.first} ${human.name.last}` }</h2>
            <h2> { !human.gender ? "" :human.gender } </h2>

            <button onClick={ handleNext }>
                Buscar random
            </button>
            <button onClick={ handleSave }>
                Guardar Persona
            </button>
        </div>
    );
};

export default Menu;