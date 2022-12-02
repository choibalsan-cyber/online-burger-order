import css from './style.module.css';
import Logo from '../Logo';
import Menu from '../Menu';
import Hamburger from '../Hamburger';

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <Hamburger toggleSidebar={props.toggleSidebar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);
export default Toolbar;
