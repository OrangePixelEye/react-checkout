import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

export function Verificar({data} : any){
    
    const current_date = new Date()
    
    let frete_price = ((data.frete == 'Kangu') ? 25.5 : 30.5)
    const total_price = data.produtos_preco + frete_price
    
    return(
        <>
        <div className="grid grid-cols-6 gap-4 max-w-sm">
          <div className="col-start-1 col-end-4">
            <h3 className="mt-auto text-lg font-bold dark:text-white">Método de entrega</h3>
          </div>
          <div className="col-end-7 col-span-2">
            <p className="float-right text-gray-400">{data.frete}</p>
          </div>
          <div className="col-start-1 col-end-3">
            <h3 className="mt-auto text-lg font-bold">Data prevista</h3>
          </div>
          <div className="col-end-7 col-span-2">
            <p className="float-right text-gray-400">{current_date.getUTCDate() + " / " + (current_date.getUTCMonth() + 1)+ " / " + (current_date.getUTCFullYear())}</p>
          </div>
          <div className="col-start-1 col-end-3">
            <h3 className="mt-auto text-lg font-bold">Observação</h3>
          </div>
          <div className="col-end-7 col-span-2">
            <p className="float-right text-gray-400">{data.endereco.obs ?? 'Nenhuma' }</p>
          </div>
          <div className="col-start-1 col-end-3">
            <h3 className="mt-auto text-lg font-bold">Valor de entrega</h3>
          </div>
          <div className="col-end-7 col-span-2">
            <p className="float-right text-gray-400">{frete_price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</p>
          </div>
          <div className="col-start-1 col-end-3">
            <h3 className="mt-auto text-lg font-bold">Valor total</h3>
          </div>
          <div className="col-end-7 col-span-2">
            <p className="float-right text-gray-400">{total_price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</p>
          </div>
        </div>
      <br/>
      <div>
        <ButtonSubmit>Finalizar compra</ButtonSubmit>
      </div>
      </>
    );
}