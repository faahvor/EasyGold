

const About = () => {
  return (
    <section className="bg-gradient-to-bl from-[#F9F8EC] to-[#FAF2F4] py-16 px-4 lg:px-32 w-full mb-6 ">
      <div className="max-w-[1280px] container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1730297250/sinclair/Group_1_jcuqvp.png" 
            alt="Mental Health Awareness"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>

        {/* Text Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Easygold Initiative for Mental Health was conceived as a response to the growing global mental health crisis. Recognizing the need for a holistic approach to mental health, the initiative&rsquo;s primary objectives are to: increase awareness and understanding of mental health issues to reduce stigma and discrimination and offer easy access to resources, tools, and information for individuals seeking help or support.
          </p>
          <button className="bg-white  text-[#9978D2] px-6 py-2 rounded-md shadow-md focus:outline-none transition duration-200">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
