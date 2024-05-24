import Pageheader from './Pageheader';
import { products, whoweare } from '../data/data';

const Whoweare = () => {
  const img1 = products[2]?.img;
  const img2 = products[3]?.img;
  const img3 = products[4]?.img;

  return (
    <>
      <Pageheader title="Who we are" />

      <section className="whoweare">
        <div className="container">
          <div>
            <div>{whoweare[0]?.body}</div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div>
              <div
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whoweare;
