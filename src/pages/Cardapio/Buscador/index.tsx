import React from 'react';
import  style from "./Buscador.module.scss"
import {CgSearch} from "react-icons/cg"

interface TipoPropBuscador {
    busca: string,
    setBuscador: React.Dispatch<React.SetStateAction<string>>
}

export const Buscador: React.FC<TipoPropBuscador> = ({ busca, setBuscador }) => {
    return(
        <div className={style.buscador}>
            <input 
                id='buscador'
                name='buscador'
                value={busca}
                onChange={(evento) => setBuscador(evento.target.value)}
                placeholder='Buscar'
            />
            <CgSearch />
        </div>
    )
};
