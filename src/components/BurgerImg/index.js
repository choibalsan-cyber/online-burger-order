import BurgerIngredient from '../BurgerIngredient';
import css from './style.module.css';

const BurgerImg = (props) => (
  <div className={css.BurgerImg}>
    <BurgerIngredient type='bread-top' />
    <BurgerIngredient type='salad' />
    <BurgerIngredient type='cheese' />
    <BurgerIngredient type='bacon' />
    <BurgerIngredient type='meat' />
    <BurgerIngredient type='bread-bottom' />
  </div>
);
export default BurgerImg;
