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
}

export default function Checkout({onChangeEtapa, current_etapa} : PropCheckout){
    let current_form = <h2>Formulario</h2>

    const [checkoutData, setCheckoutData] = useState(checkoutFormData);

    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [entrega, setEntrega] = useState('')
    const [pagamento, setPagamento] = useState('')

    const loginHandler = (_email: string) => {
        setCheckoutData((prevState) => {
            return{...prevState, email : _email}
            }
        )
        onChangeEtapa(EtapasLista.Endereço);          
    }

    const enderecoHandler = (_endereco : string) => {
        setEndereco(_endereco)
        onChangeEtapa(EtapasLista.Verificaçao);
    }

    switch (current_etapa) {
        case EtapasLista.Login:
            current_form = <Login onSubmit={loginHandler}/>
            break;
        case EtapasLista.Endereço:
            current_form = <Endereco onSubmit={enderecoHandler}/>
            break;
            //https://react-hook-form.com/form-builder
        case EtapasLista.Entrega:
            break;    
        case EtapasLista.Pagamento:
            break;
        case EtapasLista.Verificaçao:
            current_form = <h1>{checkoutData.email}</h1>
            //<Verificar/>
            break;
        default:
            break;
    }
    //todo: formulario baseado no progresso
    return(
            <>
            
            <div>{current_form}</div>
            </>
            
            

        
    )
}