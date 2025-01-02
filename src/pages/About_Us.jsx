import CircularTextLogo from "../components/CircularTextLogo";

const About_us = () => {
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
          We are defined by compassion, integrity, and commitment. We pledge
          not only to offer innovative mental wellbeing support but also to
          share years of expertise and experience in fostering emotional
          resilience and holistic wellness.
        </p>
      </div>
    </div>
  );
};

export default About_us;
