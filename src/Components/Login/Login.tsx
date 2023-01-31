export interface ILogin{
    onSubmit(e : string) : void;
}


export default function Login({onSubmit} : ILogin) {
    return(
            // <form classNameName="grid grid-flow-col grid-cols-2 grid-rows-3 gap-1" onSubmit={
            //     (e: React.SyntheticEvent) => {
            //         e.preventDefault();
            //         onSubmit(e.target.email.value)
            //       }
            // }>
            //     <h1 classNameName="underline">Login</h1>
            //     <div>
            //     Email:
            //         <input type="email"></input>  
            //     </div>
            //     <div>
            //       Senha:
            //       <input type="password"></input>  
            //     </div>
                
                
            //     <button type="submit" classNameName="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Entrar</button>
            // </form>

        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form  onSubmit={
                (e: React.SyntheticEvent) => {
                    e.preventDefault();
                    onSubmit(e.target.email.value)
                }
                }>
            <div className="form-group mb-6">
            <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Endereço de E-mail</label>
            <input name="email" type="email" className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="E-mail"/>
            </div>
            <div className="form-group mb-6">
            <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Senha</label>
            <input type="password" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                placeholder="Senha"/>
            </div>
            <div className="form-group form-check mb-6">
            <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck1"/>
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck1">Mantenha-me conectado</label>
            </div>
            <button type="submit" className="
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Entrar</button>
        </form>
        </div>
            
    )
}