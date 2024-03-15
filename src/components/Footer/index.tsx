import style from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Logo />
      
    </footer>
  );
};
