import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerBuilderPage from '../BurgerBuilderPage';
import Sidebar from '../../components/Sidebar';
import { Component } from 'react';

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  render() {
    return (
      <div>
        <Sidebar
          toggleSidebar={this.toggleSidebar}
          showSidebar={this.state.showSidebar}
        />
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <main className={css.Content}>
          <BurgerBuilderPage />
        </main>
      </div>
    );
  }
}

export default App;
