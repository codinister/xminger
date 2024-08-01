
'use client'

import { useRouter } from 'next/navigation';
import Readmore from '../Readmore';

type PostcardType = {
  id: string;
  img: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
};

const Postcard = ({ id, img, date, title, excerpt, url }: PostcardType) => {
  const router = useRouter();
  const handleClick = (val: string) => {
    router.push(`/singlepage/${val}`);
  };

  return (
    <div className="postcard">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div>
        <div>Published on: {date}</div>
        <h4 title={title}>{title.slice(0, 20)}...</h4>
        <div>{excerpt.slice(0, 110)}...</div>
        <Readmore onClick={() => handleClick(id)}>Read more</Readmore>
      </div>
    </div>
  );
};

export default Postcard;
