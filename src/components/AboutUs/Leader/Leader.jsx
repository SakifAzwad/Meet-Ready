import { GoArrowRight } from "react-icons/go";

const Leader = () => {
    return (
      
        <div className="">
           
<div className="flex flex-col md:flex-row w-full justify-between   md:h-[400px] my-20 p-12">
  
<div className="md:w-[40%] space-y-6">
      <h1 className='md:text-4xl text-2xl font-bold'>Meet our  <span className='text-pink-600'>leadership team </span></h1>
      <p className='md:text-xl text-lg text-slate-500'>Tope Awotona founded Calendly in 2013 through sheer grit, perseverance, and the complete and utter emptying of his personal savings accounts. With everything on the line, he turned his vision of simple scheduling for everyone into a vibrant, growing platform that manages scheduling for more than 20 million individuals and businesses.</p>
     <div className="text-lg text-pink-600 gap-2 flex items-center hover:text-slate-500">
   <p>Meet Our Leaders</p> 
   <GoArrowRight className="text-2xl"></GoArrowRight>
     </div>


    </div>
    <div className="md:w-[50%]">
   <img className='w-[80%] h-[350px] rounded-full' src='https://i.ibb.co/6BKvF4K/leader.jpg'></img>
 </div>
    </div> 



    <div className="flex flex-col md:flex-row w-full justify-between   md:h-[400px] my-20 p-12">
    <div className="md:w-[50%]">
     <img className='w-[80%] h-[350px] rounded-full' src='https://i.ibb.co/hyhX9JK/pexels-andrea-piacquadio-3756681.jpg'></img>
   </div>
  <div className="md:w-[40%] space-y-6">
        <h1 className='md:text-4xl text-2xl font-bold'>Meet our  <span className='text-pink-600'>Frontend  Developer </span></h1>
        <p className='md:text-xl text-lg text-slate-500'>A dedicated front-end development team is a group of programmers employed by an outsourcing company to convert UI/UX web designs in accordance with technical and business requirements. Like any other dedicated team, these development teams are employed to work full-time, typically over a set amount of time</p>
       <div className="text-lg text-pink-600 gap-2 flex items-center hover:text-slate-500">
     <p>Meet Our Developer</p> 
     <GoArrowRight className="text-2xl"></GoArrowRight>
       </div>
  
  
      </div>
      
      </div> 
  
  





      <div className="flex flex-col md:flex-row w-full justify-between   md:h-[400px] my-20 p-12">
    
  <div className="md:w-[40%] space-y-6">
        <h1 className='md:text-4xl text-2xl font-bold'>Meet our  <span className='text-pink-600'>Backend  Developer </span></h1>
        <p className='md:text-xl text-lg text-slate-500'>Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see</p>
       <div className="text-lg text-pink-600 gap-2 flex items-center hover:text-slate-500">
     <p>Meet Our Developer</p> 
     <GoArrowRight className="text-2xl"></GoArrowRight>
       </div>
  
  
      </div>
      <div className="md:w-[50%]">
     <img className='w-[80%] h-[350px] rounded-full' src='https://i.ibb.co/8Bhs79y/Linked-In-Profile-Photo.jpg'></img>
   </div>
      </div> 









    </div>
    );
};

export default Leader;