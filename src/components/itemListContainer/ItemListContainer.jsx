import React from 'react'
import { useState, useEffect } from 'react'
import Counter from '../counter/Counter'
import "./itemListContainer.css"
import { productos } from "../../productosMock"


//import CustomButton from "../customButton/CustomButton"

const ItemListContainer = ({greeting}) => {

  const [ isDark , setIsDark ] = useState(false)

  const tooggleMode = ()=>{
    
    setIsDark(!isDark)

}

const [items, setItems] = useState([])

useEffect( ()=>{

  console.log("PRIMER EFECTO") 

} ) 

const onAdd = ()=>{
  console.log("Vamos bien");
}

useEffect(()=>{

const task = new Promise ((resolve, reject)=>{
  setTimeout(() =>{
    resolve(productos)
}, 5000);

})



task
.then( (res)=>{ setItems( res )})
.catch((error)=>{"Se rechazó"})

}, [] )

console.log(items)

//console.log("Esta es la promesa", task)

  return (
    <div className = {isDark ? "container-items-dark" : "container-items-light"} >
        <h1>{greeting}</h1>
        {/*<CustomButton texto={"sumar"}/>*/}
        <button onClick={tooggleMode}>{isDark ? "cambiar a modo claro" : "cambiar a modo oscuro"}</button>
        <Counter stock={5} initial={1} onAdd={onAdd}/>

        {
          items.map((element)=>{
            return (<div key={element.name}>
              <h2>
              {element.name} 
              </h2>
              <h3>
              {element.price}
              </h3>
              <h3>
              {element.description}
              </h3>
              </div>
            );
          })
        }

    </div>
  )
}

export default ItemListContainer
