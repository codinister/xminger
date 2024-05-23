import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../../data/data';

type NavLinksType = {
  url: string;
  name: string;
} & React.ComponentProps<'a'>;
const NavLinks = ({ url, name, ...rest }: NavLinksType) => {
  return (
    <NavLink to={url} {...rest}>
      {name}
    </NavLink>
  );
};

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className={`panel-1 container ${show ? 'show' : 'hide'}`}>
        <div>
          <div>
            <img src="/logo.jpeg" alt="" className="logo" />
          </div>

          <div>
            <ul>
              <li>
                <NavLinks url="/" name="Home" onClick={() => setShow(false)} />
              </li>
              <li>
                <NavLinks
                  url="/whoweare"
                  name="Who we are"
                  onClick={() => setShow(false)}
                />
              </li>
              <li>
                <NavLinks
                  url="/"
                  name="Our products"
                  onClick={() => setShow(false)}
                />
              </li>
              <li>
                <NavLinks
                  url="/"
                  name="Where we are"
                  onClick={() => setShow(false)}
                />
              </li>
              <li>
                <NavLinks
                  url="/"
                  name="What we do"
                  onClick={() => setShow(false)}
                />
              </li>
              <li>
                <NavLinks
                  url="/"
                  name="Contact"
                  onClick={() => setShow(false)}
                />
              </li>
            </ul>

            <div>
              <div
                style={{
                  backgroundImage: `url(${products[3]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${products[2]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${products[1]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div>
                <h4>Our products</h4>
                <img src={products[0]?.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`panel-2 ${show ? 'show' : 'hide'}`}
        onClick={() => setShow(false)}
      ></div>

      <div className="hamburger">
        <img
          src="/hamburger.jpg"
          onClick={() => setShow(true)}
          alt="Hamburger"
        />
      </div>
    </nav>
  );
};

export default Nav;
