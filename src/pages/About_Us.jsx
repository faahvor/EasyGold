import { useRef } from "react";
import CircularTextLogo from "../components/CircularTextLogo";
import Footer from "../components/Footer";
import StickyPost from "../components/StickyPost";

const About_us = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[420px] text-white flex  justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dsjsvmug6/image/upload/v1735776630/sinclair/easy1_bumzt2.jpg')",
        }}
      >
        <span className="font-space font-bold text-4xl">About Us</span>
      </div>
      <div className="flex flex-col items-center mb-[6rem] ">
        <div className="my-[6rem] ">
          <CircularTextLogo />
        </div>
        <p className="mx-auto text-center px-[5rem] text-lg mb">
          We are defined by compassion, integrity, and commitment. We pledge not
          only to offer innovative mental wellbeing support but also to share
          years of expertise and experience in fostering emotional resilience
          and holistic wellness.
        </p>
      </div>

      {/* mission */}
      <div className="flex lg:flex-row flex-col gap-4 justify-evenly px-[5rem] py-[5rem] bg-[#E46924] items-center">
        <div className="lg:h-[314px] md:w-[530px] lg:rounded-[150px] rounded-[450px] overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735776626/sinclair/easy2_geil4i.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col text-white mx-[30px]">
          <h1 className="text-3xl font-bold mb-5 lg-text-start text-center">Our Mission</h1>
          <p className="md:w-[25rem] w-[23rem] px-4 lg:text-start text-center text-xl">
            To empower individuals and communities through innovative mental
            wellbeing services that promote resilience, enhance emotional
            balance, and foster sustainable personal growth in an ever-evolving
            world.
          </p>
        </div>
      </div>
      {/* vision */}
      <div className="flex lg:flex-row flex-col-reverse gap-4 justify-evenly px-[5rem] py-[5rem] bg-white items-center">
        <div className="flex flex-col text-black">
          <h1 className="text-3xl lg:text-start text-center font-bold mb-5">Our Vision</h1>
          <p className="md:w-[25rem] w-[23rem] px-4 lg:text-start text-center text-xl">
            To be the leading provider of transformative mental wellbeing
            services, setting the standard for innovation, compassion, and
            reliability in Nigeria and, ultimately, the global community.
          </p>
        </div>
        <div className="lg:h-[314px] md:w-[530px] lg:rounded-[150px] rounded-[450px] overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735776626/sinclair/easy3_ufkftn.jpg"
            alt=""
          />
        </div>
      </div>
      {/* revenue */}
      <div className="bg-[#F9FAFB] py-[2rem]  w-full flex mb-[4rem]  ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4  md:gap-[7rem] mx-auto">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div>
              <img
                src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735817266/sinclair/icon1_kfixrw.png"
                alt=""
              />
            </div>
            <h1 className="text-[#E46924] text-2xl font-semibold">
              Clear Minds
            </h1>
            <p className="w-[18rem] text-lg  text-center md:text-start">
              To make the vision of accessible and transparent mental wellbeing
              a reality.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div>
              <img
                src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735817266/sinclair/icon3_rtz1rv.png"
                alt=""
              />
            </div>
            <h1 className="text-[#E46924] text-2xl font-semibold">
              Cutting-Edge Tools
            </h1>
            <p className="w-[18rem] text-lg  text-center md:text-start">
              Empowering wellbeing with AI-driven insights and Big Data
              technology.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div>
              <img
                src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735817266/sinclair/icon2_efrllt.png"
                alt=""
              />
            </div>
            <h1 className="text-[#E46924] text-2xl font-semibold">
              Empowered Growth
            </h1>
            <p className="w-[18rem] text-lg text-center md:text-start">
              TDedicated to continuously innovating solutions for sustainable
              wellbeing.
            </p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-[#F9FAFB] py-[4rem] text-center">
        <h1 className="font-bold text-3xl text-gray-800 mb-8">Our Partners</h1>

        {/* Partners Logos */}
        <div
      ref={scrollContainerRef}
      className="flex gap-10 overflow-hidden scroll-smooth flex-nowrap"
      style={{
        maxWidth: "80%", // Show only 4 logos at a time
        margin: "0 auto",
      }}
    >
      {/* Partner Logos */}
      <div className="h-[60px] w-[100px] flex-shrink-0 flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735818752/sinclair/hp-hewlett-packard_201-min_ppjgqb.png"
          alt="HP Logo"
          className="h-full object-contain"
        />
      </div>
      <div className="h-[60px] w-[120px] flex-shrink-0 flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735818821/sinclair/download_20_5_-min_ki1cw7.png"
          alt="Oracle Logo"
          className="h-full object-contain"
        />
      </div>
      <div className="h-[60px] w-[140px] flex-shrink-0 flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735818810/sinclair/Vector-min_mcehtv.png"
          alt="Crimson Logic Logo"
          className="h-full object-contain"
        />
      </div>
      <div className="h-[60px] w-[120px] flex-shrink-0 flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735818787/sinclair/unival_group_gmbh_logo-min_gdxrlt.jpg"
          alt="Unival Group Logo"
          className="h-full object-contain"
        />
      </div>
      <div className="h-[60px] w-[140px] flex-shrink-0 flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735818821/sinclair/download_20_5_-min_ki1cw7.png"
          alt="DSI Logo"
          className="h-full object-contain"
        />
      </div>
      <div className="h-[60px] w-[140px] flex-shrink-0 flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1735818821/sinclair/download_20_5_-min_ki1cw7.png"
          alt="DSI Logo"
          className="h-full object-contain"
        />
      </div>
    </div>

    {/* Navigation Arrows */}
    <div className="flex justify-center items-center mt-6 gap-4">
      <button
        onClick={scrollLeft}
        className="text-gray-800 hover:text-gray-500"
      >
        <span className="text-2xl">←</span>
      </button>
      <button
        onClick={scrollRight}
        className="text-gray-800 hover:text-gray-500"
      >
        <span className="text-2xl">→</span>
      </button>
    </div>
      </div>

      {/* sticky part */}
      <StickyPost />

      {/* MDS story */}
      <div className="flex lg:flex-row flex-col  justify-evenly px-[5rem] py-[5rem] gap-6 text-black  bg-[#FAF6EF] items-center mb-[5rem]">
        <div className="lg:h-[314px] md:w-[530px] lg:rounded-[150px] rounded-[450px] overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1736865232/sinclair/Frame_201597882168_qriry8.png"
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-[35px] font-bold mb-5 lg:text-start text-center">
            Expanding Mental Health Support Globally
          </h1>
          <p className=" md:w-[35rem] w-[23rem] px-4 lg:text-start text-center text-xl">
            Devoted to broadening its reach beyond Africa, delivering
            exceptional mental health solutions. Our goal is to foster
            innovation while providing accessible, compassionate, and effective
            support systems that uplift individuals and communities worldwide.
          </p>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default About_us;
