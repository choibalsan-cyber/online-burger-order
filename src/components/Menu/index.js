import MenuItem from '../MenuItem';
import css from './style.module.css';

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem active link='/' text='ТӨЛБӨР' />
      <MenuItem link='/login' text='НЭВТРЭХ' />
      <MenuItem link='/order' text='ЗАХИАЛГА' />
    </ul>
  </div>
);

export default Menu;
