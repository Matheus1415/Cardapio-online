import filtros from "./filtros.json";
import styles from './Filtro.module.scss';
import React from "react";

type IOpcao = typeof filtros[0];
interface filtroProp {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export const Filtros = ({filtro, setFiltro} : filtroProp) => {

  function selecionarFiltro(opcao: IOpcao) {
    if(filtro === opcao.id) return setFiltro(null)
    return setFiltro(opcao.id)
  }
  return (
    <div className={styles.filtros}>
      {filtros.map(opcao => (
        <button className={`${styles.filtros__filtro} ${filtro === opcao.id ? styles["filtros__filtro--ativo"] : "" }`} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  )
}   