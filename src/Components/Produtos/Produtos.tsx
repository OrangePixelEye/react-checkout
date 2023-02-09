import { useEffect, useState } from "react"
import { EtapasLista } from "../../App"

export default function Produtos({onPrecoUpdate, current_etapa} : {onPrecoUpdate : ((price : number) => void), current_etapa : EtapasLista}){
    const base_price : number = 238.99
    const [qtd, setQtd] = useState(1)

    let temp_price = base_price * qtd

    const verifyPrice = (_price: number) => {
        return  (Number.isNaN(_price) ? 0 : _price)
    }
    let new_price =  verifyPrice(temp_price)

    const updatePrice = (n_qtd : number) => {
        temp_price = base_price * n_qtd
        new_price =  verifyPrice(temp_price)
        return new_price
    }


    const productPriceHandler = (new_qtd : string) => {
        // try parse num
        let qtd_number = parseInt(new_qtd);
        if (typeof(qtd_number) == 'undefined') return;
        // update price
        setQtd(qtd_number)

        // send data
        onPrecoUpdate(updatePrice(qtd_number))
        console.log(updatePrice(qtd_number))
    }


    return(
        <div className="max-w-xs">
            <img className="grid place-content-center m-2 rounded-md border" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div>
                <span className="font-semibold">Nike Air Max Pro 8888</span>
                <span className="float-right text-gray-400">44BR</span>
                <p className="mt-auto text-lg font-bold">R$ {new_price.toLocaleString("pt-BR")}</p>
                <div>
                    <input className="form-control block min px-3
                    py-1.5 text-base font-normal text-gray-700 w- bg-white bg-clip-padding border border-solid border-gray-300
                    dark:text-gray-200 dark:bg-gray-800 dark:focus:bg-gray-800 dark:focus:text-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none" type="number" disabled={current_etapa === EtapasLista.Verificaçao} placeholder="qtd" value={qtd.toFixed()} onChange={(e) => productPriceHandler(e.target.value)}></input>
                    
                </div>
            </div>
        </div>
)}