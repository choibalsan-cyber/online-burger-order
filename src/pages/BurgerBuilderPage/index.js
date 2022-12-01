import { Component } from 'react';
import BurgerControls from '../../components/BurgerControls';
import BurgerImg from '../../components/BurgerImg';
import css from './style.module.css';

class BurgerBuilderPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };
  render() {
    return (
      <div className={css.BurgerBuilderPage}>
        <BurgerImg ingredients={this.state.ingredients} />
        <BurgerControls />
      </div>
    );
  }
}

export default BurgerBuilderPage;
