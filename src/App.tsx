import { useState } from 'react'

import './App.css'
import Etapas from './Components/Etapas/Etapas'
import Checkout, { PropCheckout } from './Components/Checkout/Checkout'


export enum EtapasLista{
  Login,
  Endereço,
  Pagamento,
  Verificaçao,
}

function App() {
  const [etapa, setEtapa] = useState(EtapasLista.Login)

  
  const etapaHandler = (ordem: EtapasLista) => {
    if (etapa != ordem) setEtapa(ordem)
  }

  //let arr = []
  //  for(const e in EtapasLista){
  //    arr.push(<h1>{e.toString()}</h1>) 
  //  }
  //<h1>{e}</h1>
  return (
    <div className="App">
      <Etapas status={etapa}/>
      
      <Checkout onChangeEtapa={etapaHandler} current_etapa={etapa}/>
    </div>
  )
}

export default App
