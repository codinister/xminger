'use client'

import Nav from '../nav/Nav';
import { products } from '@/data/data';
import { useState } from 'react';

const Hero = () => {
  const [getImg, setImg] = useState('');

  const ourproducts = Object.values(products).map((v, k) => {
    return (
      <div
        key={k}
        className={`bx${v.id}`}
        onClick={() => setImg(v.img)}
        style={{
          backgroundImage: `url(${v.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h5>{v.size}</h5>
      </div>
    );
  });

  return (
    <div className="hero">


      <div
        className="header-image"
        style={{
          backgroundImage: `url(${products[0]?.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-content"></div>
      </div>

      <div className="thumbs">{ourproducts}</div>

      <div
        className="slider"
        style={{
          backgroundImage: `url(${getImg || products[1]?.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="intro-box">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
