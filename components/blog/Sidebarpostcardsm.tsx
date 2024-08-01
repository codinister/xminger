'use client'

import { useRouter } from "next/navigation";



const Sidebarpostcardsm = ({data}: {data: {id: string; title: string; img: string; excerpt: string; date: string;}[]}) => {

  const router = useRouter();

  const handleClick = (val: string) => {
    router.push(`/singlepage/${val}`);
  };

  const obj = data.map((v,k) => {
    return (
      <div className="sidebarpostcardsm" key={k} onClick={()=> handleClick(v.id)}>
      <div style={{
        backgroundImage: `url(${v.img})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}></div>
      <div>

        <h5>{v.title.slice(0,10)}...</h5>
        <span>Published on: {v.date}</span>
        <div>
          {v.excerpt.slice(0,24)}...
        </div>
      </div>
    </div>
    )
  })

  return (
    <>
    {obj}
    </>
  )
}

export default Sidebarpostcardsm