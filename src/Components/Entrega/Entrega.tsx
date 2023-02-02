export default function Entrega(){
    // prazo, endereço, frete
    const current_date = new Date()
    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-3 py-1 rounded-l-lg">Transportadora</th>
                    <th scope="col" className="px-3 py-1">Data prevista</th>
                    <th scope="col" className="px-3 py-1 rounded-l-lg">Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Kangu</th>
                    <td className="px-3 py-4">{current_date.getUTCDate() + " / " + (current_date.getUTCMonth() + 1)+ " / " + (current_date.getUTCFullYear())}</td>
                    <td className="px-3 py-4">R$ 25,50</td>
                </tr>
            </tbody>
        </table>  
        
        </div>
        
    )
}