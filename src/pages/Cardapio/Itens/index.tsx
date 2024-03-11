import cardapio from '../../../data/cardapio.json';
import styles from './Itens.module.scss';
import { Item } from './item';
import { useEffect, useState } from 'react';

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export const Itens = ({ busca, filtro, ordenador }: Props) => {
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true; 
  }
    
  function Ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
    case 'porcao':
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtdpessoas':
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.id));
    setLista(Ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};
