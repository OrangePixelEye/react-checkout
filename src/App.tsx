import { useState } from 'react'

import './App.css'
import Etapas from './Components/Etapas/Etapas'
import Checkout, { PropCheckout } from './Components/Checkout/Checkout'


export enum EtapasLista{
  Login,
  Endereço,
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
    <div className="App grid">
      <div className='grid content-center h-32 place-content-center'>
        <Etapas status={etapa}/>
      </div>
      <div className='grid border border-sky-500'>

        <Checkout onChangeEtapa={etapaHandler} current_etapa={etapa}/>
      </div>
    </div>
  )
}

export default App
