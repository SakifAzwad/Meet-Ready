
'use client'

import { useEffect, useState } from "react";


const Status = () =>{



    const[spinner,setSpinner]=useState(true)



useEffect(()=>{
    setTimeout(()=>{
   setSpinner(false)
  
  
  
    },1000)
    
},[])




    return (
        <div className="my-5 p-5 ">
            
       
{
    spinner?<span className="loading loading-ball loading-lg"></span>: <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  gap-4">   
    
              <div className="space-y-3 text-center">
                <h1 className="text-6xl font bold text-pink-500 font-bold">10<span className="text-slate-600">m</span></h1>
                <p className="text-2xl text-slate-600">Users worldwide</p>
              </div>
    
              <div className="space-y-3 text-center">
                <h1 className="text-6xl font bold text-pink-500 font-bold">100<span className="text-slate-600">k</span></h1>
                <p className="text-2xl text-slate-600">Companies uses</p>
                <p className="text-2xl text-slate-600"> Calendly</p>
              </div>

              <div className="space-y-3 text-center">
                <h1 className="text-6xl font bold text-pink-500 font-bold">130<span className="text-slate-600">+</span></h1>
                <p className="text-2xl text-slate-600">Countries with monthly active</p>
                <p className="text-2xl text-slate-600"> users</p>
              </div>

              <div className="space-y-3 text-center">
                <h1 className="text-6xl font bold text-pink-500 font-bold">50<span className="text-slate-600">+</span></h1>
                <p className="text-2xl text-slate-600">Partner integrations</p>
                
              </div>

    </div>
}


       

        </div>
    );
};

export default Status;