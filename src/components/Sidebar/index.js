import Shadow from '../general/Shadow';
import Logo from '../Logo';
import Menu from '../Menu';
import css from './style.module.css';

const Sidebar = (props) => {
  let classes = [css.Sidebar, css.Close];
  if (props.showSidebar) classes = [css.Sidebar, css.Open];

  return (
    <>
      <Shadow show={props.showSidebar} />
      <div className={classes.join(' ')}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Sidebar;
