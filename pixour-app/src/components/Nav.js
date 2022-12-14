import React from "react";
import { FaAlignJustify } from "react-icons/fa";

function Nav() {

  const [state, setState] = React.useState(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <h1 style={{color:"#ffffff",textAlign:"left",float:"left"}}>Pixour</h1>
          <h1 style={{color:"#ff0000",textAlign:"right",float:"right"}}>.</h1>
        </div>
        <div>
        {state ? (
          <ul className="navbar__right">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#tech">Technology</a>
            </li>
            <li>
              <a href="#abt">About</a>
            </li>
            <li>
              <a href="#ex">Examples</a>
            </li>

          </ul>

        ) : (
          ""
        )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
