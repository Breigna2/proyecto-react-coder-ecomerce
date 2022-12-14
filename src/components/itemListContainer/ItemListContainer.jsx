import React from 'react'
import { useState } from 'react'
import "./itemListContainer.css"

//import CustomButton from "../customButton/CustomButton"

const ItemListContainer = ({greeting}) => {

  const [ isDark , setIsDark ] = useState(false)

  const tooggleMode = ()=>{
    
    setIsDark(!isDark)

}

  return (
    <div className = 'container-items'>
        <h1>{greeting}</h1>
        {/*<CustomButton texto={"sumar"}/>*/}
        <button onClick={tooggleMode}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>
    </div>
  )
}

export default ItemListContainer