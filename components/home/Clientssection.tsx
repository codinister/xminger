'use client'


import { clients } from '@/data/data';

const Clientssection = () => {
  return (
    <div className="clientssection">
      <div className="container">
        <div>
          <div>
            <h4>{clients[0]?.title}</h4>

            <div>{clients[0]?.excerpt}</div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${clients[0]?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Clientssection;
