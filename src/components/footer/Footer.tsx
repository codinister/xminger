import { products } from '../../data/data';
import Contactbox from './Contactbox';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div className="footer-products">
            {Object.values(products).map((v, k) => {
              return (
                <div
                  key={k}
                  style={{
                    backgroundImage: `url(${v.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              );
            })}
          </div>
        </div>

        <div>
          <h4>Get in touch</h4>
          <div>
            <div>
              <Contactbox desc="+233 5554 333" fa="book" />
              <Contactbox desc="+233 5554 333" fa="book" />
              <Contactbox desc="+233 5554 333" fa="book" />
              <Contactbox desc="+233 5554 333" fa="book" />
            </div>
            <div>
              <Contactbox desc="+233 5554 333" fa="book" />
              <Contactbox desc="+233 5554 333" fa="book" />
              <Contactbox desc="+233 5554 333" fa="book" />
              <Contactbox desc="+233 5554 333" fa="book" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        All rights reserved &copy; 2024 www.xmingeradvertising.com
      </div>
    </footer>
  );
};

export default Footer;
