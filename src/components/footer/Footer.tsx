import { products } from '../../data/data';

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

        <div></div>
      </div>

      <div className="container">All rights reserved &copy; 2024</div>
    </footer>
  );
};

export default Footer;
