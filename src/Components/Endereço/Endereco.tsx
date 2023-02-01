import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { useState } from 'react';
import cep, { CEP } from 'cep-promise'
import ReactInputMask from 'react-input-mask';
import Entrega from '../Entrega/Entrega';


interface MyFormValues {
  CEP: string;
  isPreenchido : boolean
  rua ?: string;
  cidade?: string;
  estado?: string;
}

const initialValues: MyFormValues = { isPreenchido: false, CEP: '', rua:'' };
export interface IEndereco{
    onSubmit(e : string) : void;
}

export default function Endereco({onSubmit} : IEndereco){
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
              };
            onSubmit(target.cep.value)
        }
        }>
          <ReactInputMask mask='99999-999' id="cep"  name="cep" onChange={e =>{ 
            const str_cep = e.target.value.toString();
            const arr_cep = str_cep.split('');
            if(arr_cep[8] != "" && arr_cep[8] != "_"){
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
          <input id="rua" type="text" value={formValues.rua} onChange={(e) => {}} className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"
                    placeholder='Rua'></input>
                    <br />
          <input id="cidade" type="text" value={formValues.cidade} readOnly className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"
                    placeholder='Cidade'></input>
                    <br />
          <input id="estado" type="text" value={formValues.estado} readOnly className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"
                    placeholder='Estao'></input>
                    <br />
          <input id="obs" type="text" placeholder='Observações' className="form-control block w-full px-3
                    py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none"></input>
          <br />
          <button type='submit' className="px-6 py-2.5 bg-blue-600 text-white font-medium
                text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg 
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg  transition duration-150
                ease-in-out">Pesquisar</button>
        </form>
        {formValues.isPreenchido ? <Entrega/> : <></>}
    </div>
  );
  //todo: fix the onChange event
};