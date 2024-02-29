import style from "./Cardapio.module.scss"
import { ReactComponent as Logo} from "../../assets/logo.svg"
import { Buscador } from "./Buscador"
import { useState } from "react"
import { Filtros } from "./Filtros"

export const Cardapio = () =>{
    const [busca, setBuscador] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);

    return (
        <main>
            <nav className={style.menu}>
            <Logo/>
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardapio</h3>
                <Buscador 
                    busca={busca} 
                    setBuscador={setBuscador}
                />
                <div className={style.cardapio__filtros}>   
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                </div>
            </section>
        </main>
    )
}