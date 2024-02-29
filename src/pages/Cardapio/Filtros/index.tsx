import style from "Filtro.module.scss";
import filtros from "./filtros.json"

export const Filtro = () =>{
    return(
        <div>
            {filtros.map((opcao) =>(
                <button key={opcao.id}>

                </button>
            ))}
        </div>
    )
}