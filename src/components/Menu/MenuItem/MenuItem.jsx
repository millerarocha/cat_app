import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.scss';
import cx from 'classnames';

const MenuItem = ({ item, selectedItem }) => {
  return (
    <Link to={item.path} className={styles.link}>
      <li className={cx(styles.item, selectedItem === item.name && styles.selected)}>{item.label}</li>
    </Link>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  selectedItem: PropTypes.string
};

export default MenuItem;
