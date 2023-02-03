import { useEffect, useRef, useState } from 'react';
import { EtapasLista } from '../../App';
import Login from '../Login/Login';
import Endereco from '../Endereço/Endereco';
import './Checkout.css'
import { Verificar } from '../Verificar/Verificar';
import Pagamento from '../Pagamento/Pagamento';

export interface PropCheckout{
    onChangeEtapa(ordem : EtapasLista) : void;
    current_etapa : EtapasLista;
}

export type EnderecoData = { cep: string; rua: string | undefined; 
    cidade: string | undefined;
     estado: string | undefined;
      obs: string | undefined; }

const checkoutFormData = {
    email : '',
    entrega : '',
    pagamento : '',
    frete : 'Kangu',
}

export default function Checkout({onChangeEtapa, current_etapa} : PropCheckout){
    let current_form = <h2>Formulario</h2>

    const [checkoutData, setCheckoutData] = useState(checkoutFormData);
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return; // 👈️ return early if initial render
        }
       // onChangeEtapa(EtapasLista.Endereço);          
        console.log(checkoutData)
      }, [checkoutData]); 

    const freteHandler = (_frete: string) => {
        setCheckoutData((prevState) => {
            return{...prevState, frete : _frete}
            }
        )    
        //console.log(checkoutData);
        
    }

    const loginHandler = (_email: string) => {
        
        setCheckoutData({...checkoutData, email : _email})
        
        //console.log(checkoutData);
    }

    const enderecoHandler = (_endereco : EnderecoData) => {
        setCheckoutData((prevState) => {
            return{...prevState, endereco : _endereco}
            }
        )
        //console.log(checkoutData);
        
        onChangeEtapa(EtapasLista.Verificaçao);
    }

    switch (current_etapa) {
        case EtapasLista.Login:
            current_form = <Login onSubmit={loginHandler}/>
            break;
        case EtapasLista.Endereço:
            current_form = <Endereco onSubmit={enderecoHandler} onEntregaSubmit={freteHandler} onComplete={() => onChangeEtapa(EtapasLista.Verificaçao)}/>
            break;
        case EtapasLista.Verificaçao:
            current_form = <Verificar data={checkoutData}/>
            break;
        default:
            break;
    }
    return(
        <div>{current_form}</div>
    )
}