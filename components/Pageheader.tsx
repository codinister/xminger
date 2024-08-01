'use client';

import { products } from '@/data/data';

const Pageheader = ({ title }: { title: string }) => {
  
  const img1 = products[0]?.img;
  const img2 = products[1]?.img;
  const img3 = products[2]?.img;
  const img4 = products[3]?.img;

  return (
    <div className="pageheader">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Pageheader;
