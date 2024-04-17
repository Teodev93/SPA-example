import { Link } from "react-router-dom";

import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <span>Subscribe to our newsletter:</span>
        <div>
          <input type="text" />
          <button className="btn btn-white" type="submit">Sign up</button>
        </div>
      </div>
      <div className="social-links">
        <Link to="/">Twitter</Link>
        <Link to="/">Facebook</Link>
      </div>
    </footer>
  );
};

export default Footer;
