import css from './style.module.css';

const Button = (props) => (
  <button
    onClick={props.onClicked}
    className={`${css.Button} ${css[props.btnType]}`}
  >
    {props.btnName}
  </button>
);

export default Button;
