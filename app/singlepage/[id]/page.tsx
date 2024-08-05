'use client';

import Sidebarpostcardlg from '@/components/blog/Sidebarpostcardlg';
import Sidebarpostcardsm from '@/components/blog/Sidebarpostcardsm';
import Bodycontent from '@/components/Bodycontent';
import useGetquery from '@/data/server/useGetquery';
import Blockcontent from '@sanity/block-content-to-react';

const Singlepage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const blog = useGetquery('post', '/post') || [];

  const obj = blog?.find((v: any) => v._id === id);

  const arrs = blog?.filter((v: any) => v._id !== id).slice(0, 6);

  const first = arrs.splice(0, 1);
  const remaining = arrs;

  return (
    <section className="singlepage">
      <div className="container">
        <div>
          <div
            style={{
              backgroundImage: `url(${obj?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <h2>{obj?.title}</h2>

          <Bodycontent body={obj?.body} />
        </div>
        <div>
          <Sidebarpostcardlg data={first} />
          <Sidebarpostcardsm data={remaining} />
        </div>
      </div>
    </section>
  );
};

export default Singlepage;
