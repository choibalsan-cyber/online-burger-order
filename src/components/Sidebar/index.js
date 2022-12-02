import Shadow from '../general/Shadow';
import Logo from '../Logo';
import Menu from '../Menu';
import css from './style.module.css';

const Sidebar = (props) => (
  <>
    <Shadow show />
    <div className={css.Sidebar}>
      <div className={css.Logo}>
        <Logo />
      </div>
      <Menu />
    </div>
  </>
);

export default Sidebar;
