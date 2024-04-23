import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="container">

        <div>
        <div>
          <img src="/logo.jpeg" alt="" className="logo" />
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/whoweare">Who we are</NavLink>
            </li>
            <li>
              <NavLink to="/ourproducts">Our products</NavLink>
            </li>
            <li>
              <NavLink to="/whereweare">Where we are</NavLink>
            </li>
            <li>
              <NavLink to="/whatwedo">What we do</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
