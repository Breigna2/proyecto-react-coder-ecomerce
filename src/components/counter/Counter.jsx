import { useState } from "react"
import CustomButton from "../customButton/CustomButton"

const Counter = () => {

    const [counter, setCounter] = useState(0)

  return (
    <div>

    <h2>{counter}</h2>    

    <CustomButton texto={"sumar"} counter = {counter} setCounter={setCounter}/>

    </div>
  )
}

export default Counter