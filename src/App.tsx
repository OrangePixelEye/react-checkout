import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Etapas from './Components/Etapas/Etapas'
import Checkout from './Components/Checkout/Checkout'

export enum EtapasLista{
  Login,
  Endereço,
  Entrega,
  Pagamento
}

function App() {
  const [etapa, setEtapa] = useState(EtapasLista.Login)

  const etapaHandler = (ordem : EtapasLista) => {
    if (etapa != ordem) setEtapa(ordem)
  }

  

  return (
    <div className="App">
      <Etapas></Etapas>
      <Checkout onChangeEtapa={etapaHandler}></Checkout>
    </div>
  )
}

export default App
