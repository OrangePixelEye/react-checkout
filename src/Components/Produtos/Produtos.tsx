import { useState } from "react"

export default function Produtos(){
    const base_price : number = 238.99
    //const [price, setPrice] = useState(base_price)
    const [qtd, setQtd] = useState(1)

    const productPriceHandler = (new_qtd : string) => {
        // try parse num
        let qtd_number = parseInt(new_qtd);
        if (typeof(qtd_number) == 'undefined') return;
        // update price
        setQtd(qtd_number)
        // send data
    }

    const temp_price = base_price * qtd
    const new_price = (Number.isNaN(temp_price) ? 0 : temp_price) 

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
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none" type="number" placeholder="qtd" value={qtd.toFixed()} onChange={(e) => productPriceHandler(e.target.value)}></input>
                    
                </div>
            </div>
        </div>
)}