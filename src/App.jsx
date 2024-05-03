import styles from './App.module.scss';
import PetApp from './routes/PetApp';

function App() {

  return (
    <div className={styles.mainContainer}>
      <PetApp />
    </div>
  );
}

export default App;
