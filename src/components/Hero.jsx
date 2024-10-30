const Hero = () => {
  return (
    <div
      className="h-full pt-[4rem] w-full "
      style={{
        backgroundImage: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939713/clip_qghkt5.png",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className=" max-w-[1280px]  lg:mx-auto flex lg:flex-row flex-col h-full lg:h-screen items-center justify-between"
        style={{
          backgroundImage: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/OBJECTS_rdj5n7.png",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col   justify-center items-center lg:items-start">
          <h1 className=" font-space px-8  pt-10 md:pt-10 text-[#161b1d] text-center text-[28px]  w-[300px] md:text-[34px] md:w-[400px]  lg:text-start lg:text-[56px] lg:w-[521px] font-bold leading-[50px]">
            Welcome to EasyGold Initiative for Mental Health
          </h1>
          <p className="font-acme px-8 text-center text-[#0C394A] mt-6 mb-6 text-md lg:text-start ">
            Empowering your journey  to mental well-being
          </p>
          <div className="flex gap-3 px-8">
            <button className="text-white bg-[#E46924] px-6 rounded-md py-2 ">
              Get Started
            </button>
            <button className="font-semibold border-2 border-[#DBDEE2] bg-white text-[#997BCE] px-6 rounded-md py-2 ">
              Learn More
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
