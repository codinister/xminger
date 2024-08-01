'use client'

import { useRouter } from "next/navigation";


const Sidebarpostcardlg = ({
  data,
}: {
  data: { id: string; title: string; img: string; excerpt: string }[]
}) => {
  const { id, title, img, excerpt } = data[0];

  const router = useRouter();

  const handleClick = (val: string) => {
    router.push(`/singlepage/${val}`);
  };

  return (
    <div
    onClick={() => handleClick(id)}
      className="sidebarpostcardlg"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

        <h5>{title.slice(0,20)}...</h5>

        <div>{excerpt.slice(0, 100)}...</div>

    </div>
  );
};

export default Sidebarpostcardlg;
