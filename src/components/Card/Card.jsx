import PropTypes from 'prop-types';
import { CatInfo } from '../../routes/tabs/Cats/models/CatInfo';
import styles from './Card.module.scss';

const Card = ({ cat }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat.name}</h2>
      <img className={styles.cardImage} src={cat.url} alt={cat.name} />
      <h4 className={styles.description}>{cat.description}</h4>
    </div>
  );
};

Card.propTypes = {
  cat: PropTypes.instanceOf(CatInfo).isRequired,
};

export default Card;
