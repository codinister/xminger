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
              <Contactbox desc="Danyame-Kumasi" url="#" fa="map-marker" />
              <Contactbox desc="+233 (0) 322 023 430" url="#" fa="phone" />
              <Contactbox desc="+233 (0) 501 685 788" url="#" fa="phone" />
              <Contactbox
                desc="info@xmingeradvertising.com"
                url="#"
                fa="envelope"
              />
            </div>

            <div>
              <Contactbox
                desc="Facebook"
                url="https://web.facebook.com/xmingeradvertising"
                fa="facebook"
              />
              <Contactbox
                desc="Instagram"
                url="https://www.instagram.com/xminger_advertising.gh/"
                fa="instagram"
              />
              <Contactbox
                desc="Youtube"
                url="https://www.youtube.com/@xmingeradvertising7690"
                fa="youtube"
              />
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
