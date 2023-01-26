import { EtapasLista } from '../../App';
import './Checkout.css'

interface PropCheckout {
    onChangeEtapa(ordem : EtapasLista) : void;
    etapa : EtapasLista
}

export default function Checkout(prop : PropCheckout){
    let current_form = <h2>Tchau</h2>

    //todo: formulario baseado no progresso
    return(
        <>
            <div>{current_form}</div>
            <h1 className="text-3xl font-bold underline">Oi</h1>
        </>
    )
}