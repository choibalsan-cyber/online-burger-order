import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerBuilderPage from '../BurgerBuilderPage';

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuilderPage />
      </main>
    </div>
  );
}

export default App;
