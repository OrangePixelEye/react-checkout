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
  const searchParams = new URLSearchParams(document.location.search)
  const cart = searchParams.get('cart')
  const token = searchParams.get('token')
  
  const etapaHandler = (ordem: EtapasLista) => {
    if (etapa != ordem) setEtapa(ordem)
  }

  //let arr = []
  //  for(const e in EtapasLista){
  //    arr.push(<h1>{e.toString()}</h1>) 
  //  }
  //<h1>{e}</h1>
  return (
    <>
      <div className=' flex flex-auto place-content-center py-20'>
        <div className="App grid block rounded-lg shadow-lg bg-white dark:bg-zinc-900  max-w-full">
          <div className='grid content-center h-10 place-content-center pt-3'>
            <Etapas status={etapa}/>
          </div>
          <div>
            <Checkout onChangeEtapa={etapaHandler} current_etapa={etapa}/>
          </div>
        </div>
      </div>
    </>    
  )
}

export default App
