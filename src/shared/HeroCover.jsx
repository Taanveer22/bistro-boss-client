const HeroCover = ({ bgPic, title, description }) => {
  return (
    <div
      className="hero h-96 sm:h-175 mb-8 sm:mb-10 lg:mb-12"
      style={{
        backgroundImage: `url(${bgPic})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md lg:min-w-3xl bg-black/50 px-16 py-16">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCover;
