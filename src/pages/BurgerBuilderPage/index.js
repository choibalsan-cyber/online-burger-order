import { Component } from 'react';
import BuildControls from '../../components/BuildControls';
import BurgerImg from '../../components/BurgerImg';
import css from './style.module.css';

const INGREDIENT_NAMES = {
  salad: 'Салад',
  bacon: 'Гахайн мах',
  cheese: 'Бяслаг',
  meat: 'Үхрийн мах',
};

class BurgerBuilderPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 1000,
  };

  addIngredient = (type) => {
    // Ingredients доторх бүх зүйлийг задалж бичнэ
    const newIngredients = { ...this.state.ingredients };
    // newIngredients = {salad: 0, meat: 0, cheese: 0, bacon: 1}

    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
  };

  removeIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    if (newIngredients[type] > 0) newIngredients[type]--;
    this.setState({ ingredients: newIngredients });
  };

  render() {
    return (
      <div className={css.BurgerBuilderPage}>
        <BurgerImg ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          totalPrice={this.state.totalPrice}
          ingredientNames={INGREDIENT_NAMES}
        />
      </div>
    );
  }
}

export default BurgerBuilderPage;
