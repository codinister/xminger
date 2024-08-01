'use client'

import { useRouter } from 'next/navigation';
import { blog } from '@/data/data';
import Readmore from '../Readmore';


const Blogsection = ({ showbtn }: { showbtn?: Boolean }) => {
  const arr = blog.slice(0, 4);

  const router = useRouter()

  const getFirst = arr.splice(0, 1);
  const getRest = arr.map((v, k) => {

    return (
      <div className="post-card" key={k}>
        <div
          style={{
            backgroundImage: `url(${v.img})`,
            backgroundSize: 'size',
            backgroundPosition: 'center',
          }}
        ></div>
        <div>
          <div>Published on: {v.date}</div>
          <h6 title={v.title}>{v.title.slice(0, 20)}...</h6>
          <div>{v.excerpt.slice(0, 60)}...</div>
          <Readmore  onClick={() => handleClick(v.id)}>Read more</Readmore>
        </div>
      </div>
    );
  });

  const handleClick = (val: string) => {
    router.push(`/singlepage/${val}`)
  };

  return (
    <div className="blogsection">
      <div className="container">
        <div>
          <div>
            <div
              style={{
                backgroundImage: `url(${getFirst[0]?.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div>
              <h6 title={getFirst[0]?.title}>
                {getFirst[0]?.title.slice(0, 60)}...
              </h6>
              <div>{getFirst[0]?.excerpt.slice(0, 120)}...</div>

              <Readmore onClick={() => handleClick(getFirst[0]?.id)}>
                Read more
              </Readmore>
            </div>
          </div>

          <div>{getRest}</div>
        </div>

        {showbtn && <a href="/archive">View all posts</a>}
      </div>
    </div>
  );
};

export default Blogsection;
