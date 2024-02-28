import style from "./Cardapio.module.scss"
import { ReactComponent as Logo} from "../../assets/logo.svg"

export const Cardapio = () =>{
    return (
        <main>
            <nav className={style.menu}>
            <Logo/>
            </nav>
        </main>
    )
}