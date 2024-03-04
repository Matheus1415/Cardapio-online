import logo from 'assets/logo.svg'
import styles from './Item.module.scss'
import cardapio from './../itens.json'

type Props = typeof cardapio[0]

export const Item = (props: Props) => {
    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagens" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Macarrão</h2>
                    <p>Descrição do Macarrão</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>
                        Massa
                    </div>
                    <div className={styles.item__procao}>
                        600g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve 2 pessoas
                    </div>
                    <div className={styles.item__valor}>
                        R$ 50
                    </div>
                </div>
            </div>
        </div>
    )
}