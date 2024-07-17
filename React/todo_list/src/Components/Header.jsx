//  Header is where we have everything that shows up on a page
import PropTypes from 'prop-types'
import { GoCheckCircle } from "react-icons/go";
import Button from './Button';


function Header({title, onAdd, showAdd}) {
    const onClick = () => {
        console.log("clic");
    }
  return (
    <header>
      <h1><GoCheckCircle style={{marginRight: "10px"}}/>{title}</h1>
      <Button text={showAdd?'Close':'Add'} color={showAdd?'red':'green'} onClick={onClick} onAdd={onAdd} />
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

