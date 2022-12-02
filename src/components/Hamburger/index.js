import css from './style.module.css';

const Hamburger = (props) => (
  <div onClick={props.toggleSidebar} className={css.Hamburger}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Hamburger;
