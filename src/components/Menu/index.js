import MenuItem from '../MenuItem';
import css from './style.module.css';

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem active link='/' text='ШИНЭ ЗАХИАЛГА' />
      <MenuItem link='/order' text='ЗАХИАЛГУУД' />
      <MenuItem link='/login' text='НЭВТРЭХ' />
    </ul>
  </div>
);

export default Menu;
