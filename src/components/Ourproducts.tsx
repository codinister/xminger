import Pageheader from './Pageheader';
import { products } from '../data/data';
import Productbox from './ourproducts/Productbox';

const Ourproducts = () => {
  console.log(products);

  return (
    <>
      <Pageheader title="Our Products" />

      <section className="ourproducts">
        <div className="container">
          {products.map((v, k) => {
            return <Productbox img={v.img} title={v.size} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Ourproducts;
