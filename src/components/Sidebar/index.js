import Shadow from '../general/Shadow';
import Logo from '../Logo';
import Menu from '../Menu';
import css from './style.module.css';

const Sidebar = (props) => {
  let classes = [css.Sidebar, css.Close];
  if (props.showSidebar) classes = [css.Sidebar, css.Open];

  return (
    <div>
      <Shadow close={props.toggleSidebar} show={props.showSidebar} />
      <div onClick={props.toggleSidebar} className={classes.join(' ')}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
