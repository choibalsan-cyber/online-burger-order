import css from './style.module.css';

import BuildControl from '../BuildControl';

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <h3>
        Бургерын үнэ: <strong>{props.totalPrice}</strong>
      </h3>
      <BuildControl
        type='salad'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BuildControl
        type='bacon'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BuildControl
        type='cheese'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BuildControl
        type='meat'
        name={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
    </div>
  );
};

export default BuildControls;
