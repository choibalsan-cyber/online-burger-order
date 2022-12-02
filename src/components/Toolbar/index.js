import css from './style.module.css';
import Logo from '../Logo';
import Menu from '../Menu';

const Toolbar = () => (
  <header className={css.Toolbar}>
    <div>...</div>
    <div className={css.Logo}>
      <Logo />
    </div>
    <nav>
      <Menu />
    </nav>
  </header>
);
export default Toolbar;
