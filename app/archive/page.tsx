'use client'

import { blog } from '@/data/data';
import Postcard from '@/components/blog/Postcard';
import Blogsection from '@/components/home/Blogsection';


const Archive = () => {
  const arr = [...blog];

  arr.splice(0, 3);

  return (
    <section className="archive">
      <Blogsection />

      <div className="container">
        {arr.map((v, k) => {
          return (
            <Postcard
              key={k}
              id={v.id}
              img={v.img}
              date={v.date}
              title={v.title}
              excerpt={v.excerpt}
              url=""
            />
          );
        })}
      </div>
    </section>
  );
};

export default Archive;
