const Productbox = ({ img, title }: { title: string; img: string }) => {
  return (
    <div
      className="prod-box"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Productbox;
