

const program = [
    {
      title: "Personalized Therapy Sessions",
      description: "One-on-one virtual therapy sessions with licensed mental health professionals.",
      icon: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730325460/sinclair/Frame_73_1_rfftll.png",
      buttonText: "More"
    },
    {
      title: "Self-Help Resource Library",
      description: "A comprehensive collection of digital resources, including articles, videos, and interactive tools.",
      icon: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730325764/sinclair/Vector_fffdey.png",
      buttonText: "More"
    },
    {
      title: "Support Groups",
      description: "Virtual support groups for individuals facing similar mental health challenges.",
      icon: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730325460/sinclair/Frame_73_3_fnefni.png",
      buttonText: "More"
    },
    {
      title: "Mindfulness and Wellness Programs",
      description: "Programs focused on mindfulness, meditation, and overall well-being.",
      icon: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730325460/sinclair/Frame_73_4_n4y63i.png",
      buttonText: "More"
    },
    {
      title: "Crisis Support Services",
      description: "Immediate assistance for individuals in mental health crises.",
      icon: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730325460/sinclair/Frame_73_5_lcfcnb.png",
      buttonText: "More"
    },
    {
      title: "Educational Workshops and Webinars",
      description: "Regular workshops and webinars on various mental health topics.",
      icon: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730325460/sinclair/Frame_73_6_jyczpp.png",
      buttonText: "More"
    }
  ];
const Program = () => {
  return (
    <div className="w-full bg-gradient-to-bl from-[#F9F8EC] to-[#FAF2F4] px-8  h-full mb-4 pb-9 ">
        <div className="max-w-[1280px] justify-center items-center flex flex-col pt-[3rem] mx-auto">
            <h1 className="font-bold font-space text-[25px] text-center  md:text-[39px]">Here’s a preview of our programs</h1>
            <div  className="grid gap-[3.9rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {
                program.map((item,index)=>(
                    <div key={index} className=" md:w-[290px] font-space h-[289px] px-[10px] bg-[#] rounded-2xl justify-between items-center flex flex-col pt-8 shadow-lg hover:shadow-xl duration-200 ">
                        <img src={item.icon} alt="" className="w-[47px] h-[46px] " />
                        <h3 className="lg-w-[205px] text-[20px] font-normal text-center px-[10px]">{item.title}</h3>
                        <p className="text-[12px] font-normal text-center px-[20px] lg-w-[213px]">{item.description}</p>
                        <button className="mb-[1.5rem] text-center  px-8 py-2 text-purple-600 border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-200">{item.buttonText}</button>

                    
                    </div>
                ))
            }
            </div>
           
        </div>

    </div>
  )
}

export default Program