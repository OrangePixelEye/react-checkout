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
    <div>
      <h1>Digite seu endereco</h1>
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
                      } }></ReactInputMask>
                      <input id="rua" type="text" value={formValues.rua} onChange={(e) => {}}></input>
                      <input id="cidade" type="text" value={formValues.cidade} readOnly></input>
                      <input id="estado" type="text" value={formValues.estado} readOnly></input>
                      <input id="obs" type="text" placeholder='Observações'></input>

                      <button type='submit'>Pesquisar</button>
                    </form>
                    {formValues.isPreenchido ? <Entrega/> : <></>}
    </div>
  );
  //todo: fix the onChange event
};