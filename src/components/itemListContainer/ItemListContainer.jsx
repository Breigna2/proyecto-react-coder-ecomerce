import React from 'react'
import { useState, useEffect } from 'react'
import Counter from '../counter/Counter'
import "./itemListContainer.css"


//import CustomButton from "../customButton/CustomButton"

const ItemListContainer = ({greeting}) => {

  const [ isDark , setIsDark ] = useState(false)

  const tooggleMode = ()=>{
    
    setIsDark(!isDark)

}

useEffect( ()=>{

  console.log("PRIMER EFECTO") 

} ) 

const onAdd = ()=>{
  console.log("Vamos bien");
}

  return (
    <div className = {isDark ? "container-items-dark" : "container-items-light"} >
        <h1>{greeting}</h1>
        {/*<CustomButton texto={"sumar"}/>*/}
        <button onClick={tooggleMode}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>
        <Counter stock={5} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer