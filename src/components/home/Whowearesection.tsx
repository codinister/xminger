import { whoweare } from '../../data/data';
import Readmore from '../Readmore';

const Whowearesection = () => {
  const who = whoweare;
  return (
    <div className="whowearesection">

        <div>
          <h2>{who[0].title}</h2>
          <div>{who[0]?.excerpt}</div>
          <Readmore>Read more</Readmore>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${who[0]?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
    
      </div>
    </div>
  );
};

export default Whowearesection;
