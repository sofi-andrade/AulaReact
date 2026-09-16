//Inportanto nosso hook useState da biblioteca React 
//Ele permite amezenar valores e atualizar a tela automaticamente 

import { useState } from "react";
//  cria um componete principal da apricação 
 function App(){
  
  //Estado responsavel por
  //  armazenar a cidade digitada 

  const [cidade, setCidade] = useState("") ;

  //Estado responsavel por armazernar a temperatura da cidade 
  const [temperatura, setTemperatura]= useState("");

  //Estado responsavel por armazernar a clima da cidade 
  const [clima, setClima ] = useState("");

  //Estado responsavel por armazernar a Umidade da cidade 
  const [umidade, setUmidade ] = useState("");

 

  //Fnção executada quando o usuario clicar no botão consultar 
  function consultarClima(){
    //Verifica se a cidade digitada é São Paulo 
    if(
      cidade.toLowerCase() === "são paulo " || 
      cidade.toLowerCase() === "sao paulo "  

    ){
       //Atualiza a temperatura 

      setTemperatura("24°C")

      //Atualiza condição climatica
      setClima("Ensolarado");

      //Atualiza a Umidade 
      setUmidade("60%")

    }

    else if (cidade.toLowerCase()=== "curitiba"){

      //Atualiza a temperatura 
      setTemperatura("17°C");


      //Atualiza condição climatica
      setClima("Chuvoso");

      //Atualiza a Umidade 
      setUmidade("85%")

    }

    else if (cidade.toLowerCase()=== "rio de janeiro"){

      //Atualiza a temperatura 
      setTemperatura("30°C");


      //Atualiza condição climatica
      setClima("Ensolarado");

      //Atualiza a Umidade 
      setUmidade("45%")
    }


    //Executa caso a cidade digitada não esteja cadastrada 
    else{
      setTemperatura("--");
      setClima("Cidade não cadastrada ");
      setUmidade("--");

    }
  }
//importa a inteface visual do sistema 
return(
  //container principal da aplicação
<div
style={{
    padding: "20px",
    fontFamily: "Arial"

  }}>
    {/* Titulo Principal */}
    <h1>Sistema de previsão do tempo☁️</h1>

    {/*Campo para digitação*/ }

    <input 
    //tipo do compo
    type="text"
    //Texto exibindo dentro da caixa
    placeholder="Digite uma cidade"

    //Valor vinculado ao estado cidade
    value={cidade}

    //Atualiza o estado quando o usuario digita
    onChange={(e) => setCidade(e.target.value)}/>
    
    


    {/* Botão de consulta*/}
    <button
    
    //Executa a função consultarClima()
    onClick={consultarClima}
    
    style={{

      marginLeft: "10px"
    }}
    >
      {/* Texto exibido no botão */}
      Consultar

    </button>
    {/*Linha horizonatal para separar seções */}
    <hr />
    <h2>Cidade: {cidade}</h2>
    <h2>Temperatura: {temperatura} </h2>
    <h2>Clima: {clima}</h2>
    <h2>Umidade {umidade}</h2>   

</div>

)
}
//Exporta o componete App para ser utilizad no React 
export default App; 