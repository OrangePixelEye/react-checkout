import { IEndereco } from "../Endereço/Endereco"

export default function Entrega({onEntregaSubmit} : any){
    // todo: receber checked padrão
    const current_date = new Date()
    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-100 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-3 py-1 rounded-l-lg">Selecione</th>
                    <th scope="col" className="px-3 py-1">Empresa</th>
                    <th scope="col" className="px-3 py-1">Data prevista</th>
                    <th scope="col" className="px-3 py-1 rounded-l-lg">Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th><input checked onChange={e=>{onEntregaSubmit(e.target.id)}} name="Frete" type="radio" id="Kangu" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/></th>
                    <td scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Kangu</td>
                    <td className="px-3 py-4">{current_date.getUTCDate() + " / " + (current_date.getUTCMonth() + 1)+ " / " + (current_date.getUTCFullYear())}</td>
                    <td className="px-3 py-4">R$ 25,50</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th><input onChange={e=>{onEntregaSubmit(e.target.id)}} name="Frete" type="radio" id="Sedex" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/></th>
                    <td scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sedex</td>
                    <td className="px-3 py-4">{current_date.getUTCDate() + " / " + (current_date.getUTCMonth() + 1)+ " / " + (current_date.getUTCFullYear())}</td>
                    <td className="px-3 py-4">R$ 30,50</td>
                </tr>
            </tbody>
        </table>  
    </div> 
    )
}