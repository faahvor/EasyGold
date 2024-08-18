const Hero = () => {
  return (
    <div
      className="h-screen pt-[4rem]"
      style={{
        backgroundImage: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939713/clip_qghkt5.png",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex md:flex-row   flex-col gap-8 md:gap-[5rem] md:px-32  h-full items-center md:justify-between"
        style={{
          backgroundImage: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/OBJECTS_rdj5n7.png",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col   justify-center items-center md:items-start">
          <h1 className="font-space pt-10 md:pt-10 text-[#161b1d] text-center md:text-start  text-[2.5rem] md:text-[2.6rem] font-bold leading-[50px]">
            Welcome to <br /> EasyGold Initiative <br /> for Mental Health
          </h1>
          <p className="font-acme text-[#0C394A] mt-6 mb-6 text-md">
            Empowering your journey to mental well-being
          </p>
          <div className="flex gap-3">
            <button className="text-white bg-[#E46924] px-6 rounded-md py-2 ">
              Get Started
            </button>
            <button className="font-semibold border-2 border-[#DBDEE2] bg-white text-[#997BCE] px-6 rounded-md py-2 ">
              Get Started
            </button>
          </div>
        </div>
        <div 
          style={{
            backgroundImage: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/Group_fk1uaj.png",
            backgroundSize: "15rem 10rem ",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            className="h-[19rem] lg:h-[22rem] mb-8 "
            src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/pic_xuyfyd.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
