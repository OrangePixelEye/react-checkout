import { EtapasLista } from "../../../App"

interface IStepper{
    current_status : EtapasLista,
    status : EtapasLista,
    style: any, //todo
    title : string,
}

export default function Stepper({current_status, status, style, title}: IStepper) {
    
    return(
        <li className={current_status == status ? style.current.li : style.inactive.li}>
            <span className={current_status == status ? style.current.span : style.inactive.span}>
                {status + 1}
            </span>
            <span>
                <h3 className="font-medium leading-tight">{title}</h3>
            </span>
        </li>
    )
}