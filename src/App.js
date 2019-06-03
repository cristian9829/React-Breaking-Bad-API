import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { async } from 'q';

function Frase (props) {
  return(
    <div className="frase">
      <h1>{props.frase.quote}</h1>
      <p>- {props.frase.author}</p>
    </div>
  )
}

function App (){
  const [ frase, obtenerFrase ] = useState({})

  //CONSULTA A UNA REST API
  const consultarAPI = async () =>{
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //agregar el resultado de la api al state similar a this.setState
    obtenerFrase(resultado.data[0])

  }

  useEffect(
    () =>{
      consultarAPI();
    }, []
  )

  return(
    <div className="contenedor">
      <Frase
        frase= {frase}
      />
      <br/>
      <button 
        onClick = {consultarAPI}
      >Generar Nueva</button>
    </div>
  )
}

export default App;