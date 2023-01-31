import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

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
  return (
    <div>
      <h1>Digite seu endereco</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            onSubmit(values.CEP)
            //console.log({ values, actions });
            //alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field id="CEP" name="CEP" placeholder="CEP" required /><br/><br/>
          <Field id="Cidade" name="Cidade" placeholder="Cidade" /><br/><br/>
          <Field id="Estado" name="Estado" placeholder="Estado" /><br/>
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};