export interface ILogin{
    onSubmit(e : string) : void;
}

export default function Login({onSubmit} : ILogin) {
    return(
            <form className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-1" onSubmit={
                (e: React.SyntheticEvent) => {
                    e.preventDefault();
                    onSubmit(e.target.email.value)
                  }
            }>
                <h1 className="underline">Login</h1>
                Email:<input name="email" type="email"></input>
                Senha:<input type="password"></input>
                <button type="submit">a</button>
            </form>
    )
}