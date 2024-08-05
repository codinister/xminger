'use client';

import Pageheader from '@/components/Pageheader';
import Productbox from '@/components/ourproducts/Productbox';
import useGetquery from '@/data/server/useGetquery';

const Ourproducts = () => {
  const products = useGetquery('products', '/products') || [];

  return (
    <>
      <Pageheader title="Our Products" />

      <section className="ourproducts">
        <div className="container">
          {products.map((v: any, k: number) => {
            const tit = v.title.split(' ');
            const one = tit[0];
            const two = tit[2];

            const size = one + 'X' + two;
            return <Productbox key={k} img={v.image} title={size} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Ourproducts;
