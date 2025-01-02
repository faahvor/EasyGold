
const CircularTextLogo = () => {
  return (
    <div className="relative w-64 h-64">
      {/* Circular text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fill="#000" fontSize="5" textAnchor="middle">
            <textPath href="#circlePath" startOffset="50%" className="text-[7px]">
              · EasyGold Intiative · Empowering your journey  to mental well-being ·
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/logo_wyzjgn.png"
          alt="Logo"
            className=" h-20 mx-auto"
          />
         
        </div>
      </div>
    </div>
  );
};

export default CircularTextLogo;
