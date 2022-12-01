import { Component } from 'react';
import BuildControls from '../../components/BuildControls';
import BurgerImg from '../../components/BurgerImg';
import Modal from '../../components/general/Modal';
import OrderSummary from '../../components/OrderSummary';
import css from './style.module.css';

const INGREDIENT_NAMES = {
  salad: 'Салад',
  bacon: 'Гахайн мах',
  cheese: 'Бяслаг',
  meat: 'Үхрийн мах',
};

const INGREDIENT_PRICES = {
  salad: 150,
  bacon: 800,
  cheese: 250,
  meat: 1500,
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
    purchasing: false,
  };

  addIngredient = (type) => {
    // Ingredients доторх бүх зүйлийг задалж бичнэ
    const newIngredients = { ...this.state.ingredients };
    // newIngredients = {salad: 0, meat: 0, cheese: 0, bacon: 1}
    const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    newIngredients[type]++;
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice,
      purchasing: true,
    });
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };

      const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

      newIngredients[type]--;

      this.setState({
        ingredients: newIngredients,
        totalPrice: newTotalPrice,
        purchasing: newTotalPrice > 1000,
      });
    }
  };

  render() {
    let disabledIngredients = { ...this.state.ingredients };
    for (const key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div className={css.BurgerBuilderPage}>
        <Modal>
          <OrderSummary
            ingredientNames={INGREDIENT_NAMES}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <BurgerImg ingredients={this.state.ingredients} />
        <BuildControls
          disabled={!this.state.purchasing}
          disabledIngredients={disabledIngredients}
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
