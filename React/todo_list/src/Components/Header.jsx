//  Header is a Name and button Add
import PropTypes from 'prop-types'
import { GoCheckCircle } from "react-icons/go";
import Button from './Button';

function Header({title}) {
    const onClick = () => {
        console.log("clic");
    }
  return (
    <header>
      <h1><GoCheckCircle style={{marginRight: "10px"}}/>{title}</h1>
      <Button text="Add" color="green" onClick={onClick}/>
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

