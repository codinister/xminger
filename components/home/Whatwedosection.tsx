'use client';

import { whatwedo } from '@/data/data';
import Readmore from '../Readmore';

const Whatwedosection = () => {
  return (
    <div className="whatwedosection">
      <div>
        <div>
          <div>
            <i className="fa fa-th-large"></i>
            <h6>Billboard space</h6>
            <h6>rental</h6>
          </div>
        </div>
        <div>
          <div>
            <i className="fa fa-picture-o"></i>
            <h6>Large format</h6>
            <h6>printing</h6>
          </div>
        </div>
        <div>
          <div>
            <i className="fa fa-industry"></i>

            <h6>Advertising</h6>
            <h6>Consultancy</h6>
          </div>
        </div>
      </div>
      <div>
        <h2>{whatwedo[0]?.title}</h2>

        <div>{whatwedo[0]?.excerpt}</div>

        <Readmore>Read more</Readmore>
      </div>
    </div>
  );
};

export default Whatwedosection;
