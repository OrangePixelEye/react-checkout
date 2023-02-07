export default function Produtos(){
    return(
        <div>
            <img src="src/assets/react.svg"></img>
            <p>Title product</p>
            <p>R$XX,xx</p>
            <div>
                <p>
                    Qty:
                </p>
                <input type="number"></input>
            </div>
            <a>
                <span>Remove</span>
            </a>
        </div>
    )
}