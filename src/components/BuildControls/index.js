import css from './style.module.css';

import BuildControl from '../BuildControl';

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерын үнэ: <strong>{props.totalPrice}₮</strong>
      </p>
      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabledIngredients={props.disabledIngredients}
          type={el}
          name={props.ingredientNames}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
        />
      ))}
      <button disabled={props.disabled} className={css.OrderButton}>
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
