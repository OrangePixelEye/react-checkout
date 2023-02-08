import { gql, useMutation } from "@apollo/client"
import axios from 'axios';


export interface ILogin{
    onSubmit(e : string) : void;
}

const LOGIN_MUTATION = gql`
    mutation tryLogin($email: String, $password: String){
        generateCustomerToken(email : $email, password : $password){
            token
        }
    }
`;


export default function Login({onSubmit} : ILogin) {

    const [tryLogin, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
        onCompleted: (dat) => {
            console.log(dat)
            console.log(data)
        }
    });

    

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
                        tryLogin({variables : {email: email, password : pass}}).then( )
                        onSubmit(email)
                    }
                    }>
                <div className="form-group mb-6">
                <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Endereço de E-mail</label>
                <input id="email" name="email" type="email" className="form-control block w-full px-3
                py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp" placeholder="E-mail"/>
                </div>
                <div className="form-group mb-6">
                <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Senha</label>
                <input required type="password" id="password" className="form-control block w-full px-3
                py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                focus:border-blue-600 focus:outline-none" 
                    placeholder="Senha"/>
                </div>
                <div className="form-group form-check mb-6">
                <input type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    id="exampleCheck1"/>
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck1">Mantenha-me conectado</label>
                </div>
                <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium
                text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg 
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg  transition duration-150
                ease-in-out">Entrar</button>
            </form>
    )
}