import React from 'react';
import style from './Cardapio.module.scss';
import { Buscador } from './Buscador';
import { useState } from 'react';
import { Filtros } from './Filtros';
import { Ordenador } from './Ordenador';
import { Itens } from './Itens';

export const Cardapio = () =>{
  const [busca, setBuscador] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <main>
      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cardapio</h3>
        <Buscador 
          busca={busca} 
          setBuscador={setBuscador}
        />  
        <div className={style.cardapio__filtros}>   
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens
          busca={busca}
          filtro={filtro}
          ordenador={ordenador}
        />
      </section>
    </main>
  );
};