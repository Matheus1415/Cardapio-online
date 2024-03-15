import styles from './NoteFound.module.scss';
import { ReactComponent as NotFoundImagem } from 'assets/not_found.svg';
import classNames from 'classnames';
import styleTema from '../../styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]: true,
      [styleTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1) }>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImagem />
    </div>
  );
};
