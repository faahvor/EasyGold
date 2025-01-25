const StickyPost = () => {
  return (
    <div>
      {/* Stagnant Background Section */}
      <div className="relative h-[200vh] ">
        {/* Image Background */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dsjsvmug6/image/upload/v1735820641/sinclair/b9ef9781aedddc7cdfdc98490f6fe89d-min_utxnpa.jpg')",
            }}
          ></div>
        </div>

        {/* Scrolling Content */}
        <div className="absolute top-[10rem] z-10 bg-transparent md:px-4 px-6 md:py-8 py-12 text-white flex flex-col md:flex-row ">
          {/* Section 1 & 2 */}
          <div className="flex md:flex-col flex-row justify-center items-center  space-x-4 md:space-y-10 md:gap-[15rem] space-y-0 w-full">
            {/* Section 1 */}
            <div className="bg-white text-gray-800 py-4 px-4 rounded-lg shadow-md flex flex-col items-center md:w-[90%] w-[45%] mx-auto sm:mx-0">
              <h2 className=" text-lg md:text-xl font-bold mb-2">
                Global Standard
              </h2>
              <p className="md:text-sm md:w-[20rem] text-base text-center">
                We maintain a process that is globally accepted.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white text-gray-800 py-4 px-4 rounded-lg shadow-md flex flex-col items-center md:w-[90%] w-[45%]  mx-0">
              <h2 className=" text-lg md:text-xl font-bold mb-2">
                Advanced Technology
              </h2>
              <p className="md:text-sm md:w-[20rem] text-base text-center">
                We use the latest technology to drive innovative solutions.
              </p>
            </div>
          </div>

          {/* Decorative Image */}
          <div className="md:my-8 my-2 w-full flex justify-center">
            <img
              src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1736854106/sinclair/Africa_20Vectoe_l1jnju.png"
              alt="Africa Illustration"
              className=" w-[100%]  "
            />
          </div>

          {/* Section 3 & 4 */}
          <div className="flex md:flex-col flex-row justify-center md:gap-[15rem] items-center md:justify-start space-x-4 md:space-y-10 space-y-0 w-full">
            {/* Section 3 */}
            <div className="bg-white text-gray-800 py-4 px-4 rounded-lg shadow-md flex flex-col items-center md:w-[90%] w-[45%] mx-auto sm:mx-0">
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                Partnerships
              </h2>
              <p className="md:text-sm md:w-[20rem] text-base text-center">
                Our international partnerships ensure seamless delivery.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-white text-gray-800 py-4 px-4 rounded-lg shadow-md flex flex-col items-center md:w-[90%] w-[45%] mx-auto sm:mx-0">
              <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                Accountability
              </h2>
              <p className="md:text-sm md:w-[20rem] text-base text-center">
                Accountability is our foundation. We ensure transparency and
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyPost;
