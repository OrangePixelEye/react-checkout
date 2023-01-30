export default function Endereco({onSubmit} : any){
    return (
        <div>
            <form onSubmit={(e : React.SyntheticEvent) => {
                e.preventDefault();

            }}>
                <h1 className="underline">Endereço</h1>
                CEP:<input type="text"></input>
                Cidade<input type="text"></input>
                Estado<input type="text"></input>
            </form>
        </div>
    );
}