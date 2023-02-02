import { useState } from 'react';
import { EtapasLista } from '../../App';
import Login from '../Login/Login';
import Endereco from '../Endereço/Endereco';
import './Checkout.css'
import { Verificar } from '../Verificar/Verificar';

export interface PropCheckout{
    onChangeEtapa(ordem : EtapasLista) : void;
    current_etapa : EtapasLista;
}

const checkoutFormData = {
    email : '',
    endereco : '',
    entrega : '',
    pagamento : '',
    frete : '',
}

export default function Checkout({onChangeEtapa, current_etapa} : PropCheckout){
    let current_form = <h2>Formulario</h2>

    const [checkoutData, setCheckoutData] = useState(checkoutFormData);

    const pagamentoHandler = (_pagamento: string) => {
        setCheckoutData((prevState) => {
            return{...prevState, pagamento : _pagamento}
            }
        )
        onChangeEtapa(EtapasLista.Verificaçao);          
    }

    const freteHandler = (_frete: string) => {
        console.log(_frete)
        setCheckoutData((prevState) => {
            return{...prevState, frete : _frete}
            }
        )    
    }

    const loginHandler = (_email: string) => {
        setCheckoutData((prevState) => {
            return{...prevState, email : _email}
            }
        )
        onChangeEtapa(EtapasLista.Endereço);          
    }

    const enderecoHandler = (_endereco : string) => {
        setCheckoutData((prevState) => {
            return{...prevState, endereco : _endereco}
            }
        )
        onChangeEtapa(EtapasLista.Verificaçao);
    }

    switch (current_etapa) {
        case EtapasLista.Login:
            current_form = <Login onSubmit={loginHandler}/>
            break;
        case EtapasLista.Endereço:
            current_form = <Endereco onSubmit={enderecoHandler} onEntregaSubmit={freteHandler}/>
            break;
         
        case EtapasLista.Pagamento:
            break;
        case EtapasLista.Verificaçao:
            current_form = <Verificar data={checkoutData}/>
            //<Verificar/>
            break;
        default:
            break;
    }
    return(
        <div>{current_form}</div>
    )
}