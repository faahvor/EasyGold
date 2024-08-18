import  { useState } from "react";
import '../index.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Navbar = () => {
const [menuOpen, setMenuOpen]= useState(false)
const navToggle=()=>{
  setMenuOpen(!menuOpen)
}


  return (
    <div>
      <div className="flex w-full  bg-[#FDFBF4] fixed justify-between md:mr-[6rem] ">
        <img className="mt-2" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1723939712/logo_wyzjgn.png" alt="" />
        <div className=" hidden font-acme md:flex mt-3 *:font-semibold  gap-8 mr-[1rem]">
          <a href="">About</a>
          <a href="">Programs</a>
          <a href="">Contacts</a>
        </div>

        <div className="md:hidden" onClick={navToggle}>
          <button className={`z-40 mt-3 mr-6 block hamburger md:hidden  focus:outline-none ${menuOpen ? 'open':''}`}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div id="menu" className={`bg-[#FDFBF4] fixed flex left-0 z-50 right-0 top-[3.5rem] font-acme *:font-semibold flex-col  rounded-xl px-6 pb-10 py-1 pt-10  space-y-3 text-lg text-black uppercase ${menuOpen ? 'flex' : 'hidden'}`}>
        <a className="flex " href=""><span> Home</span><FaRegArrowAltCircleRight />
        </a>
        <a href="">About</a>
        <a href="">Contacts</a>
      </div>
    </div>
  );
};
export default Navbar;
