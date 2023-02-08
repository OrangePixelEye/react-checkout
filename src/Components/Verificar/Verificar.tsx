import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

export function Verificar({data} : any){
    console.log(data.frete)
    const current_date = new Date()
    return(
        <>
        <div className="grid grid-cols-6 gap-4 max-w-sm">
          <div className="col-start-1 col-end-3">
            <h3 className="mt-auto text-lg font-bold">Observação</h3>
          </div>
          <div className="col-end-7 col-span-2">
            <p className="float-right text-gray-400">{data.endereco.obs ?? 'Nenhuma' }</p>
          </div>
          <div className="col-start-1 col-end-3">
            <h3 className="mt-auto text-lg font-bold">Método de entrega</h3>
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
            <h3 className="mt-auto text-lg font-bold">Valor total</h3>
          </div>
          <div className="col-end-7 col-span-2">
            <p className="float-right text-gray-400">R$ 250,00</p>
          </div>
        </div>
      <br/>
      <div>
        <ButtonSubmit>Finalizar compra</ButtonSubmit>
      </div>
      </>
    );
}