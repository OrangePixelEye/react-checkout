import { EtapasLista } from "../../App";

interface EtapaProp {
    status : EtapasLista
}

const Etapas = ({status} : EtapaProp ) => {

    const current = {
        li : 'flex items-center text-blue-600 dark:text-blue-500 space-x-2.5',
        span : 'flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500'
    }

    const inactive = {
        li : 'flex items-center text-gray-500 dark:text-gray-400 space-x-2.5',
        span : "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
    } 
    //todo: barras de progresso
    return (
        <div>
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                <li className={status == EtapasLista.Login ? current.li : inactive.li}>
                    <span className={status == EtapasLista.Login ? current.span : inactive.span}>
                        1
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Login</h3>
                    </span>
                </li>
                <li className={status == EtapasLista.Endereço ? current.li : inactive.li}>
                    <span className={status == EtapasLista.Endereço ? current.span : inactive.span}>
                        2
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Endereço</h3>
                    </span>
                </li>
                <li className={status == EtapasLista.Entrega ? current.li : inactive.li}>
                    <span className={status == EtapasLista.Entrega ? current.span : inactive.span}>
                        3
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Frete</h3>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        4
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Pagamento</h3>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        5
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Revisar compra</h3>
                    </span>
                </li>
            </ol>
        </div>
    );
}

export default Etapas