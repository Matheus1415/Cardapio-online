import React, { useState } from "react";
import style from "./Ordenador.module.scss";
import opcoes from './opcao.json';
import classNames from "classnames";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

interface Props {
    ordenador:string,
    setOrdenador:React.Dispatch<React.SetStateAction<string>>
}

export const Ordenador= ({ordenador,setOrdenador}: Props) => {
    const [aberto, setAberto] = useState(false);

    return (
<button
      className={classNames({
        [style.ordenador]: true,
        [style["ordenador--ativo"]]:aberto
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{"Ordenar Por"}</span>
      {aberto? <MdKeyboardArrowUp size={20}/>: <MdKeyboardArrowDown size={20}/>}
        <div className={classNames({
            [style.ordenador__options]: true,
            [style['ordenador__options--ativo']]: aberto
        })}>
            {opcoes.map(opcao => (
                <div 
                    className={style.ordenador__option} 
                    key={opcao.value}
                    onClick={() =>setOrdenador(opcao.value)}
                >
                    {opcao.nome}
                </div>
            ))}
        </div>
    </button>
    );
};
