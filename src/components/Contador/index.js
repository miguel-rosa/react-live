import React, { useState, useEffect } from "react";
import "./styles.css";

const Contador = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(`O número é: ${number}`)
  })

  return (
    <div className="contador">
      <button onClick={()=> setNumber(previousNumber => previousNumber-1)}> - </button>
      <div>{number}</div>
      <button onClick={() => setNumber(previousNumber => previousNumber+1)}>
        +
      </button>
    </div>
  )
}

export default Contador;