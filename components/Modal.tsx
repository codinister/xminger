import { createPortal } from 'react-dom';

const Modal = ({
  img,
  title,
  cls,
  fn
}: {
  img: string;
  title: string;
  cls: string;
  fn: Function
}) => {
  const content = (
    <div className={`modal-wrapper ${cls}`} onClick={()=> fn()}>
      <div>
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'cener',
          }}
        ></div>
        <div><h4>{title}</h4></div>
      </div>
    </div>
  );

  if (document.getElementById('modal')) {
    return createPortal(
      content,
      document.getElementById('modal') as HTMLElement
    );
  } else {
    return <></>;
  }


};

export default Modal;
