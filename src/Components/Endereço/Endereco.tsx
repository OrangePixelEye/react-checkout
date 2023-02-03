import { useState } from 'react';
import cep, { CEP } from 'cep-promise'
import ReactInputMask from 'react-input-mask';
import Entrega from '../Entrega/Entrega';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { EnderecoData } from '../Checkout/Checkout';

interface MyFormValues {
  CEP: string;
  isPreenchido : boolean
  rua ?: string;
  cidade?: string;
  estado?: string;
  obs ?: string;
}

const initialValues: MyFormValues = { isPreenchido: false, CEP: '' };
export interface IEndereco{
    onSubmit(e : EnderecoData) :void;
    onEntregaSubmit(e:string) :void;
    onComplete ?: any
}

export default function Endereco({onSubmit, onEntregaSubmit, onComplete} : IEndereco){
  const [formValues, setFormValues] = useState(initialValues)

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h3>Endereço</h3>
      <br />
      <form  onSubmit={
        (e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                cep: { value: string };
                rua?: { value: string };
                cidade?: { value: string };
                estado?: { value: string };
                obs?: { value: string };
              };
            const dataEndereçoEntrega = {
              cep: target.cep.value,
              rua : target.rua?.value,
              cidade : target.cidade?.value,
              estado : target.estado?.value,
              obs : target.obs?.value,
            }
            onSubmit(dataEndereçoEntrega)
        }
        }>
          <ReactInputMask mask='99999-999' id="cep"  name="cep" onChange={e =>{ 
            const str_cep = e.target.value.toString();
            const arr_cep = str_cep.split('');

            if(arr_cep[8] != "" && arr_cep[8] != "_" && arr_cep[8] != undefined){
              cep(str_cep).then((value : CEP) => {
                setFormValues((prev)=> {
                  return{
                    ...prev,
                    cep : str_cep,
                    rua : value.street,
                    cidade : value.city,
                    estado : value.state ,
                    isPreenchido : true
                  }
                })
                
              }).catch(err => {
                alert(err)
              })
            }
          } }className="form-control block w-full px-3
          py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
          rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
          focus:border-blue-600 focus:outline-none"
          placeholder='CEP'></ReactInputMask>
          <br />
          <input id="rua" type="text" value={formValues.rua} onChange={(e) => {formValues.rua = e.target.value}} className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"
                    placeholder='Rua'></input>
                    <br />
          <input id="cidade" type="text" value={formValues.cidade} onChange={(e) => {formValues.cidade = e.target.value}} className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"
                    placeholder='Cidade'></input>
                    <br />
          <input id="estado" type="text" value={formValues.estado} onChange={(e) => {formValues.estado = e.target.value}} className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"
                    placeholder='Estado'></input>
                    <br />
          <input id="obs" type="text" value={formValues.obs} onChange={(e) => {   
            setFormValues((prev)=> {
            return{
              ...prev, obs: e.target.value
            }
          }
            )}} placeholder='Observações' className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"></input>
          <br />
        </form>

        {formValues.isPreenchido ? <>
          <Entrega onEntregaSubmit={onEntregaSubmit}/>
            <br/>
            <ButtonSubmit onClick={() => onComplete()}>Próximo</ButtonSubmit>
          </> :  <ButtonSubmit>Próximo</ButtonSubmit>
           }
    </div>
  );
};