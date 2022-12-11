import React from 'react'
import { useState } from 'react'

//import CustomButton from "../customButton/CustomButton"

const ItemListContainer = ({greeting}) => {

  const [ isDark , setIsDark ] = useState(false)

  const toogleMode = ()=>{
    setIsDark(!isDark)

}

  return (
    <>
        <h1>{greeting}</h1>
        {/*<CustomButton texto={"sumar"}/>*/}
        <button onClick={toogleMode}>cambiar</button>
    </>
  )
}

export default ItemListContainer