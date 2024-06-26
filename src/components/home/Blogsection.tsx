import { blog } from '../../data/data';
import Readmore from '../Readmore';

const Blogsection = () => {
  const arr = blog.slice(0, 4);

  const getFirst = arr.splice(0, 1);
  const getRest = arr.map((v, k) => {
    return (
      <div className="post-card">
        <div
          style={{
            backgroundImage: `url(${v.img})`,
            backgroundSize: 'size',
            backgroundPosition: 'center',
          }}
        ></div>
        <div>
          <h6 title={v.title}>{v.title.slice(0, 10)}...</h6>
          <div>{v.excerpt.slice(0,60)}...</div>
          <Readmore>Read more</Readmore>
        </div>
      </div>
    );
  });

  return (
    <div className="blogsection">
      <div className="container">
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

            <Readmore>Read more</Readmore>
          </div>
        </div>

        <div>{getRest}</div>
      </div>
    </div>
  );
};

export default Blogsection;
