import Pageheader from './Pageheader';
import { products } from '../data/data';

const Whatwedo = () => {
  const img1 = products[2]?.img
  const img2 = products[4]?.img
  return (
    <>
      <Pageheader title="What we do" />

      <section className="whatwedo">
        <div>

          <div style={{
            backgroundImage: `url(${img1})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}>
          <div>
            <span>1</span>
            <h6>Advertising Consultancy</h6>
          </div>
          <div>
            <span>2</span>
            <h6>Billboard space rental</h6>
          </div>
          <div>
            <span>3</span>
            <h6>Large format printing</h6>
          </div>
          </div>
        </div>

        <div>

          <div>
          Xminger has billboards situated at prime locations across the country.
          They come in various sizes and are designed to capture and captivate
          the viewer. We have selected the best locations in various towns in
          the region to ensure maximum exposure and brand building. Our
          advertising spaces are rented to clients who will display their
          visuals for a standard 12-month period or part of. Space rental
          renewals must be confirmed at least 30 days before the expiration
          dates.
          </div>
        </div>
        <div>

          <div  style={{
            backgroundImage: `url(${img2})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}></div>
        </div>
      </section>
    </>
  );
};

export default Whatwedo;
