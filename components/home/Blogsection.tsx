'use client'

import { useRouter } from 'next/navigation';

import Readmore from '../Readmore';
import useGetquery from '@/data/server/useGetquery';


const Blogsection = ({ showbtn }: { showbtn?: Boolean }) => {



  const post = useGetquery('post', '/post') || []
  
  const arr = post?.slice(0, 4);


  console.log(arr)




  const router = useRouter()


  const getFirst = arr?.splice(0, 1);
  const getRest = arr?.map((v: any, k: number) => {

    return (
      <div className="post-card" key={k}>
        <div
          style={{
            backgroundImage: `url(${v.image})`,
            backgroundSize: 'size',
            backgroundPosition: 'center',
          }}
        ></div>
        <div>
          <div>Published on: {v._createdAt}</div>
          <h6 title={v.title}>{v.title?.slice(0, 20)}...</h6>
          <div>{v.excerpt?.slice(0, 60)}...</div>
          <Readmore  onClick={() => handleClick(v._id)}>Read more</Readmore>
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
                backgroundImage: `url(${getFirst[0]?.image})`,
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
