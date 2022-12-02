import Shadow from '../Shadow';
import css from './style.module.css';

const Modal = (props) => (
  <>
    <Shadow close={props.close} show={props.show} />
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
      className={css.Modal}
    >
      {props.children}
    </div>
  </>
);

export default Modal;
