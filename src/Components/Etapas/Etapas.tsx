import { EtapasLista } from "../../App";
import Stepper from "./Stepper/Stepper";

interface EtapaProp {
    status : EtapasLista
}

const Etapas = ({status} : EtapaProp ) => {

    const style_status = {
        current : {
            li : 'flex items-center text-blue-600 dark:text-blue-500 space-x-2.5',
            span : 'flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500'
        },
        inactive : {
            li : 'flex items-center text-gray-500 dark:text-gray-400 space-x-2.5',
            span : "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
        } 
    }
    return (
        <div>
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                <Stepper current_status={status} status={EtapasLista.Login} style={style_status} title="Login"></Stepper>
                <Stepper current_status={status} status={EtapasLista.Endereço} style={style_status} title="Endereço e entrega"></Stepper>
                <Stepper current_status={status} status={EtapasLista.Pagamento} style={style_status} title="Forma de pagamento"></Stepper>
                <Stepper current_status={status} status={EtapasLista.Verificaçao} style={style_status} title="Verificar"></Stepper>               
            </ol>
        </div>
    );
}

export default Etapas