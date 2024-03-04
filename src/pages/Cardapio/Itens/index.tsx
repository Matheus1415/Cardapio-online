import cardapio from "./itens.json"
import styles from './Itens.module.scss'
import { Item } from "./item"

export const Itens = () => {
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