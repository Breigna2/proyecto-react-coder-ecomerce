import { useState } from "react"
import CustomButton from "../customButton/CustomButton"

const Counter = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial)

  return (
    <div>

    <h2>{counter}</h2>    

    <CustomButton texto={"sumar"} counter = {counter} setCounter={setCounter}/>

    </div>
  )
}

export default Counter 