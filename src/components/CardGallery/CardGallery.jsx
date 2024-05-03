import Card from '../Card/Card';
import Loader from '../Loader';
import styles from './CardGallery.module.scss';
import PropTypes from 'prop-types';

const CardGallery = ({ data, isLoading }) => {
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.cardContainer}>
        {data?.map((cat) => (
          <Card cat={cat} key={cat.id} />
        ))}
      </div>
    </>
  );
};

CardGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};

export default CardGallery;
