import { ReactComponent as Logo } from '../../assets/logo.svg';
import style from './menu.module.scss';

export const Menu = () => {
  const rotas = [
    { label: 'Inicio', to: '/' },
    { label: 'Cardapio', to: '/cardapio' },
    { label: 'Sobre', to: '/sobre' },
  ];
  return (
    <nav className={style.menu}>
      <Logo />
      <ul className={style.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={style.menu__link}> 
            <a href={rota.to}>
              {rota.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
