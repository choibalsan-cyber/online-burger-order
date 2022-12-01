import css from './style.module.css';

import BuildControl from '../BuildControl';

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p style={{ fontSize: '24px' }}>
        Бургерын үнэ: <strong>{props.totalPrice}₮</strong>
      </p>
      <BuildControl
        disabledIngredients={props.disabledIngredients}
        type='salad'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BuildControl
        disabledIngredients={props.disabledIngredients}
        type='bacon'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BuildControl
        disabledIngredients={props.disabledIngredients}
        type='cheese'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BuildControl
        disabledIngredients={props.disabledIngredients}
        type='meat'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
    </div>
  );
};

export default BuildControls;
