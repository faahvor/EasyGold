import { FaArrowRight } from "react-icons/fa";

const articles = [
    {
      title: "Five Effective Strategies for Managing Anxiety",
      publishedDate: "August 5, 2023",
      description:
        "Discover practical techniques to help manage and reduce anxiety in everyday life. Learn how mindfulness exercises, and professional support can make a difference.",
      imageUrl: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730329055/sinclair/Rectangle_3966_1_zv0voj.png", // Replace with the actual image URL
      readMoreLink: "Read More"
    },
    {
      title: "The Power of Community in Mental Health",
      publishedDate: "July 25, 2023",
      description:
        "Explore how connecting with others can enhance your mental well-being. Understand the benefits of support groups and community engagement in your journey to better mental health.",
      imageUrl: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730329054/sinclair/Rectangle_3966_cqaaok.png", // Replace with the actual image URL
      readMoreLink: "Read More"
    },
    {
      title: "How to Create a Healthy Work-Life Balance",
      publishedDate: "July 15, 2023",
      description:
        "Find out how to balance your professional and personal responsibilities. Tips and strategies for setting boundaries, managing stress, and finding time to rest & care.",
      imageUrl: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1730329053/sinclair/Rectangle_3966_2_dk7hpj.png", // Replace with the actual image URL
      readMoreLink: "Read More"
    }
  ];
  

const Mental = () => {
  return (
    <div className="w-full h-full bg-gradient-to-bl from-[#F9F8EC] to-[#FAF2F4] px-8  ">
<div className="max-w-[1280px] flex flex-col justify-between items-center">
<h1 className="md:text-[39px] text-[25px] font-bold font-space lg:w-[774px] text-center ">Insights, Tips, and Stories for Better Mental Health</h1>
<p className="lg:w-[782px] text-[12px] md:text-[18px] font-normal text-center font-space">Stay informed and inspired with our latest articles and updates. Our blog features expert advice, personal stories, and practical tips to support your mental well-being.</p>
<div className="grid gap-[2.5rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2.5rem]">
    {
        articles.map((item,index)=>(
            <div key={index} className="text-[#0C394A] font-space font-normal flex flex-col  items-center px-[2.7rem] lg:w-[289px] h-[362px] bg-[#FBF5F5]  ">
                <div className="w-[287px] h-[146px] ">
                    <img className="h-full w-full object-cover " src={item.imageUrl} alt="" />
                </div>
                <div className="w-[235px] flex flex-col justify-between gap-4 ">
                <h1 className="text-[18px]  text-start">{item.title}</h1>
                <h3 className="text-[11px] text-start italic text-[#BFC6CA] font-normal">{item.publishedDate} </h3>
                <p className="w-[235px] text-start text-[11px]">{item.description} </p>
                <button className="text-[11px] flex items-center gap-2 text-[#A184CF] ">{item.readMoreLink} <span><FaArrowRight /></span> </button>
                </div>
                
            </div>
        ))
    }

</div>
</div>
    </div>
  )
}

export default Mental