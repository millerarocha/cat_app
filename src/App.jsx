import { useGetCatData } from './hooks/useGetCatData';
import Card from './components/Card';
import styles from './App.module.scss';

function App() {
  const { data, loading } = useGetCatData();

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>Cat App </h1>
      <p className={styles.mainDescription}>
        Cat App is a delightful platform that showcases a curated collection of 20 adorable cats from around the world.
        Each cat is beautifully displayed on a card, featuring captivating images and brief descriptions. Whether
        you&apos;re a cat lover or simply appreciate their charm, Cat App offers a delightful experience to explore and
        enjoy these furry companions.
      </p>
      {loading && <h1>Loading data...</h1>}
      <div className={styles.cardContainer}>
        {data?.map((cat) => (
          <Card cat={cat} key={cat.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
