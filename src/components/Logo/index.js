import css from './style.module.css';
import logoImg from '../../assets/images/burger-logo.png';

const Logo = () => (
  <div className={css.Logo}>
    <img src={logoImg} alt='logo' />
  </div>
);
export default Logo;
