
'use client'

import { products } from '@/data/data';
import Pageheader from '@/components/Pageheader';
import Productbox from '@/components/ourproducts/Productbox';

const Ourproducts = () => {

  return (
    <>
      <Pageheader title="Our Products" />

      <section className="ourproducts">
        <div className="container">
          {products.map((v, k) => {
            return <Productbox key={k} img={v.img} title={v.size} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Ourproducts;
