import { useState } from 'react';
import { EtapasLista } from '../../App';
import Login from '../Login/Login';
import Endereco from '../Endereço/Endereco';
import './Checkout.css'

export interface PropCheckout{
    onChangeEtapa(ordem : EtapasLista) : void;
    current_etapa : EtapasLista;
}

export default function Checkout({onChangeEtapa, current_etapa} : PropCheckout){
    let current_form = <h2>Formulario</h2>
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [entrega, setEntrega] = useState('')
    const [pagamento, setPagamento] = useState('')

    const loginHandler = (_email: string) => {
        setEmail(_email);
        onChangeEtapa(EtapasLista.Endereço);          
    }

    const enderecoHandler = (_endereco : Array<string>) => {

    }

    switch (current_etapa) {
        case EtapasLista.Login:
            current_form = <Login onSubmit={loginHandler}/>
            break;
        case EtapasLista.Endereço:
            current_form = <Endereco onSubmit={enderecoHandler}/>
            break;
        case EtapasLista.Entrega:
            break;    
        case EtapasLista.Pagamento:
            break;
        case EtapasLista.Verificaçao:
            break;
        default:
            break;
    }
    //todo: formulario baseado no progresso
    return(
        <>
            <div>{current_form}</div>
            <h1 className="text-3xl font-bold underline">Botões</h1>
        </>
    )
}