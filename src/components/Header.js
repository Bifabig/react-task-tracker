// import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        ></Button>
      )}
    </header>
  );
};

// Header.prototypes = {
//     title: PropTypes.string,
// }

export default Header;
