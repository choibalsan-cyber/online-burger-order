import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerBuilderPage from '../BurgerBuilderPage';
import Sidebar from '../../components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuilderPage />
      </main>
    </div>
  );
}

export default App;
