import { Component } from 'react';
import BurgerControls from '../../components/BurgerControls';
import BurgerImg from '../../components/BurgerImg';
import css from './style.module.css';

class BurgerBuilderPage extends Component {
  render() {
    return (
      <div className={css.BurgerBuilderPage}>
        <BurgerImg />
        <BurgerControls />
      </div>
    );
  }
}

export default BurgerBuilderPage;
