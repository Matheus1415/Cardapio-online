import cardapio from "./itens.json"
import styles from './Itens.module.scss'
import { Item } from "./item"
import { useState } from "react";

interface Props {
    busca:String;
    filtro:number | null;
    ordenador:string
}

export const Itens = ({busca, filtro, ordenador}:Props) => {
    const [lista,setLista] = useState(cardapio)
    return(
        <div className={styles.itens}>
            {cardapio.map(item =>(
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}