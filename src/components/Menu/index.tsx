import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import classNames from "classnames";

import "./styles.css";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="menu">
      <img
        className="logo"
        src="https://placehold.co/600x400/EEE/31343C"
        alt="logo"
      />
      <div>
        <Link to="/" className={classNames({ 'menu-currentPage': location.pathname === '/'})}>sunglasses</Link>
        <Link to="/eyegalsses" className={classNames({ 'menu-currentPage': location.pathname === '/eyegalsses'})}>eyegalsses</Link>
        <Link to="/lenses" className={classNames({ 'menu-currentPage': location.pathname === '/lenses'})}>lenses</Link>
      </div>
      <div className="search">
        <input type="text" placeholder="search" />
        <button className="btn" type="reset">Reset</button>
      </div>
    </div>
  );
};

export default Menu;
