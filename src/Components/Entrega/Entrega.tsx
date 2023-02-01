export default function Entrega(){
    // prazo, endereço, frete
    const current_date = new Date()
    return(
        <table style={{border:"1px", borderColor:"red"}}>
            <thead>
                <tr>
                    <td >Transportadora</td>
                    <td >Data prevista</td>
                    <td >Valor</td>
                </tr>
                <tr>
                    <td >Kangu</td>
                    <td >{current_date.getUTCDate() + " / " + (current_date.getUTCMonth() + 1)}</td>
                    <td >R</td>
                </tr>
            </thead>
        </table>
    )
}