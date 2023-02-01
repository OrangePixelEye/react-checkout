import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { useState } from 'react';
import cep from 'cep-promise'
import ReactInputMask from 'react-input-mask';


interface MyFormValues {
  CEP: string;
  cidade?: string;
  estado?: string;
}

export interface IEndereco{
    onSubmit(e : string) : void;
}

export default function Endereco({onSubmit} : IEndereco){
  const initialValues: MyFormValues = { CEP: '' };
  const [_cep , setCep] = useState("")

  return (
    <div>
      <h1>Digite seu endereco</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          cep(_cep).then(console.log)
          onSubmit(values.CEP)
            //console.log({ values, actions });
            //alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            
        }}
      >
        <Form>
          <ReactInputMask mask='99999-999' id="test" name="test" onChange={e =>{
            setCep(e.target.value)
          } }></ReactInputMask>
          <Field id="CEP" name="CEP" placeholder="CEP" required /><br/><br/>
          <Field id="Cidade" name="Cidade" placeholder="Cidade" /><br/><br/>
          <Field id="Estado" name="Estado" placeholder="Estado" /><br/>
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};