import css from './style.module.css';
import Logo from '../Logo';

const Toolbar = () => (
  <header className={css.Toolbar}>
    <div>...</div>
    <div className={css.Logo}>
      <Logo />
    </div>
    <nav>Цэс</nav>
  </header>
);
export default Toolbar;
