import { EtapasLista } from '../../App';
import './Checkout.css'

export interface PropCheckout{
    onChangeEtapa(ordem : EtapasLista) : void;
    current_etapa : EtapasLista;
}

export default function Checkout({onChangeEtapa, current_etapa} : PropCheckout){
    let current_form = <h2>Formulario</h2>

    //todo: formulario baseado no progresso
    return(
        <>
            <div>{current_form}</div>
            <h1 className="text-3xl font-bold underline">Botões</h1>
        </>
    )
}