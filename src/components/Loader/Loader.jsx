import styles from './Loader.module.scss';
import loaderImage from './Loading.gif'

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContainer}>
        <img src={loaderImage} alt="Loading..." className={styles.loader} />
      </div>
    </div>
  );
};

export default Loader;
