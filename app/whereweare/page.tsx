'use client';

import Pageheader from '@/components/Pageheader';
import { whereweare } from '@/data/data';

const Whereweare = () => {
  return (
    <>
      <Pageheader title="Where we are" />
      <section className="whereweare">
        <div className="container">
          <div>{whereweare[0]?.body}</div>
        </div>

        <div className="container">
          <div
            style={{
              backgroundImage: `url(${whereweare[0]?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Whereweare;
