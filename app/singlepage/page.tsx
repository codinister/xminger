'use client'


import Sidebarpostcardlg from '@/components/blog/Sidebarpostcardlg';
import Sidebarpostcardsm from '@/components/blog/Sidebarpostcardsm';
import { blog } from '@/data/data';


const Singlepage = ({ params }: { params: { id: string } })=> {
  const { id } = params

  const obj = blog.find((v) => v.id === id);

  const arrs = blog.filter((v) => v.id !== id).slice(0, 6);

  const first = arrs.splice(0, 1);
  const remaining = arrs;

  return (
    <section className="singlepage">
      <div className="container">
        <div>
          <div
            style={{
              backgroundImage: `url(${obj?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <h2>{obj?.title}</h2>

          <div>{obj?.body}</div>
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
