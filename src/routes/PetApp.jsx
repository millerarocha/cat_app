import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cats from './tabs/Cats';
import Dogs from './tabs/Dogs';
import Menu from '../components/Menu';
import { MENU_ITEMS } from './constants';
import styles from './PetApp.module.scss';

const PetApp = () => {
  return (
    <Router>
      <header className={styles.header}>
        <h1 className={styles.title}>The Pet App</h1>
        <p className={styles.description}>
          Explore a variety of dog and cat breeds in our PetApp your go-to destination for furry companions.
        </p>
      </header>
      <div className={styles.appContainer}>
        <aside className={styles.sidebar}>
          <Menu menuItems={MENU_ITEMS} />
        </aside>
          <Routes>
            <Route path="/cats" element={<Cats />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="*" element={<Navigate to="/cats" replace />} />
          </Routes>
      </div>
    </Router>
  );
};

export default PetApp;
