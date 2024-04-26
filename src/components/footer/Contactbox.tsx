


type DESC = {
  desc: string; 
  fa: string;
}

const Contactbox = ({fa,desc}: DESC) => {
  return (
    <div className="cont-box">
    <div>
      <i className={`fa fa-${fa}`}></i>
    </div>
    <div>{desc}</div>
  </div>
  )
}

export default Contactbox