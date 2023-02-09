import { gql, useMutation } from "@apollo/client"
import axios from 'axios';


export interface ILogin{
    onSubmit(e : string) : void;
}




export default function Login({onSubmit} : ILogin) {
    const sendRequest = () => {
      var data = JSON.stringify({
        query: `mutation{
          generateCustomerToken(email : "", password : ""){
              token
          }
         }`,
        variables: {}
      });
    
        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://loja.meece.com.br/graphql',
            headers: { 
              'Content-Type': 'application/json', 
              'Accept': 'application/json', 
            },
            data : data
          };
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return(
            <form className="max-w-sm" onSubmit={
                    (e: React.SyntheticEvent) => {
                        e.preventDefault();
                        const target = e.target as typeof e.target & {
                            email: { value: string };
                            password: { value: string };
                          };
                        const email = target.email.value;
                        const pass = target.password.value;
                        sendRequest()
                        onSubmit(email)
                    }
                    }>
                <div className="form-group mb-6">
                <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-300">Endereço de E-mail</label>
                <input id="email" name="email" type="email" className="form-control block w-full px-3
                py-1 text-base font-normal text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 dark:focus:text-gray-300 focus:bg-white dark:focus:bg-gray-800
                focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp" placeholder="E-mail"/>
                </div>
                <div className="form-group mb-6">
                <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-300">Senha</label>
                <input required type="password" id="password" className="form-control block w-full px-3
                py-1 text-base font-normal text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 dark:focus:text-gray-300 focus:bg-white 
                focus:border-blue-600 focus:outline-none dark:focus:bg-gray-800" 
                    placeholder="Senha"/>
                </div>
                <div className="form-group form-check mb-6">
                <input type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    id="exampleCheck1"/>
                <label className="form-check-label inline-block text-gray-800 dark:text-gray-300" htmlFor="exampleCheck1">Mantenha-me conectado</label>
                </div>
                <div className="grid place-content-end">
                  <button type="submit" className="grid place-content-end px-6 py-2.5 bg-blue-600 text-white font-medium
                  text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg 
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg  transition duration-150
                  ease-in-out">Entrar</button>
                </div>
                
            </form>
    )
}