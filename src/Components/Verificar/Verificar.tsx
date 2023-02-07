import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

export function Verificar({data} : any){
    console.log(data.frete)
    const current_date = new Date()
    return(
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray- dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-3 py-1 rounded-l-lg">Valor Total</th>
                  <th scope="col" className="px-3 py-">Método de entrega</th>
                  <th scope="col" className="px-3 py-1">Data prevista</th>
                  <th scope="col" className="px-3 py-1">Observações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">R$ 250,00</td>
                <td className="px-3 py-4">{data.frete}</td>
                <td className="px-3 py-4">{current_date.getUTCDate() + " / " + (current_date.getUTCMonth() + 1)+ " / " + (current_date.getUTCFullYear())}</td>
                <td className="px-3 py-4">{data.endereco.obs ?? 'Nenhuma' }</td>
              
              </tr>
            </tbody>
      </table>
      <br/>
      <div>
        <ButtonSubmit>Finalizar compra</ButtonSubmit>
      </div>
        
      
      </div>
      </>
    );
}