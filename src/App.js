import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { async } from 'q';


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

  console.log(frase)
  return(
    <h1>Hola </h1>
  )
}

export default App;