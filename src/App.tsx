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
      <div className=' flex flex-auto place-content-center py-20'>
        <div className="App grid block rounded-lg shadow-lg bg-white max-w-max">
          <div className='grid content-center h-10 place-content-center'>
            <Etapas status={etapa}/>
          </div>
          {/* <div className='flex border border-sky-500'> */}
          <div>
            <Checkout onChangeEtapa={etapaHandler} current_etapa={etapa}/>
          </div>
        </div>
      </div>
    
  )
}

export default App
