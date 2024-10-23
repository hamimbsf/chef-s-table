const Banner = () => {
  return (
    <div
      className="hero h-[70vh] w-full container mx-auto rounded-xl"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5779787/pexels-photo-5779787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      <div className="hero-overlay rounded-xl py-8 bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl text-white font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
          <p className="mb-5 text-white">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.
          </p>
          <div className="space-x-6">
          <button className="btn rounded-full text-black border-none hover:text-white bg-[#0BE58A]">Explore Now</button>
          <button className="btn rounded-full border-white bg-transparent border text-white">Our FeedBack</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
