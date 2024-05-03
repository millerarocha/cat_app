import MenuItem from './MenuItem';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Menu = ({ menuItems }) => {
  const location = useLocation();
  const selectedItem = location.pathname.slice(1);

  return (
    <nav>
      <ul>
        {menuItems?.map((item) => (
          <MenuItem key={item.name} item={item} selectedItem={selectedItem}/>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
