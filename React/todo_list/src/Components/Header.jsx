import PropTypes from 'prop-types'
import Button from './Button';

function Header({title}) {
  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add"/>
    </header>
  );
}

Header.defaultProps = {
    title: "ToDo List",
};
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header

