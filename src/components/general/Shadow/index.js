import css from './style.module.css';

const Shadow = (props) =>
  props.show && <div onClick={props.close} className={css.Shadow}></div>;

export default Shadow;
