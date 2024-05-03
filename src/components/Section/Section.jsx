import styles from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, description, children }) => {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{description}</h2>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
