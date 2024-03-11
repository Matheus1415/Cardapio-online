import filtros from './filtros.json';
import styles from './Filtro.module.scss';
import React from 'react';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];
interface FiltroProp {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Filtros: React.FC<FiltroProp> = ({ filtro, setFiltro }) => {

  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map(opcao => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};
