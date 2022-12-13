import React, {useState} from 'react';
import './App.css';

function App() {
  const [numero, setCount] = useState(5)
  const [tema, setTheme] = useState("blue")
  

  function diminuir(){
    setCount(numero =>{ 
        if(numero === 0){
          return numero = 0
        }else{
          return  numero - 1
        }
    })
  }

  function somar () {
    setCount(numero => {
     return numero + 1
    })
    setTheme("red")
  }
  
  return (
    <>
    <button onClick={diminuir}>-</button>
    <span>{numero}</span>
    <span>{tema}</span>
    <button onClick={somar} >+</button>
    </>
  );
}

export default App;
