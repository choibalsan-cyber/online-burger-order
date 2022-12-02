import css from './style.module.css';

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <a className={props.active && css.active} href={props.link}>
      {props.text}
    </a>
  </li>
);
export default MenuItem;
