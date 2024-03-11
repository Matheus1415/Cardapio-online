import cardapio from '../../data/cardapio.json';
import style from './inicio.module.scss';

export default function Inicio() {
  let pratosRecomendado = [...cardapio];
  pratosRecomendado = pratosRecomendado.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <>
      <section className={style.titulo}>
        <h3>Recomendações da cozinha</h3>
        <div className={style.recomendados}>
          {pratosRecomendado.map(item => (
            <div className={style.recomendado} key={item.id}>
              <div className={style.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={style.recomendado__botao}>
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
