import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import KidsDropdown from "../components/KidsDropdown";

import ScrollToTop from "../components/ScrollToTop";

import { RoomContext } from "../context/RoomContext";

import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  //get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  
  return (
    <section className="">
      {/* Banner */}
      <div className="bg-room bg-cover h-[560px] bg-center flex justify-center items-center  relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
          {/* title */}
          <h1 className="text-6xl text-white z-20 font-primary text-center">
            {room.name} Details
          </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-6 ">
             <h2 className="h2">{room.name}</h2>
             <p className="mb-8">{room.description}</p>
             <img src={room.imageLg} alt="roomImage" className="mb-8"/>

             {/* Facilities */}

             <div className="mt-12">
               <h3 className="h3 mb-3">Room Facilities</h3>
               <p className="mb-12">
                  
               </p>

               {/* grid */}
               <div className="grid grid-cols-3 gap-6 mb-12">
                 {
                  room.facilities.map((item,index)=>(
                     <div className="flex items-center gap-x-3 flex-1" key={index}>
                      <div className="text-3xl text-accent">{item.icon}</div>
                      <div className="text-base">{item.name}</div>
                     </div>  
                  ))
                 }
               </div>
             </div>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%] lg:ml-5 ">
            {/* Reservation */}
             <div className="py-8 px-6 bg-accent/20 mb-12">
               <div className="flex flex-col space-y-4 mb-4">
                 <h3>Your Reservation</h3>
                 <div className="h-[60px]">
                   <CheckIn/>
                 </div>
                 <div className="h-[60px]">
                   <CheckOut/>
                 </div>
                 <div className="h-[60px]">
                   <AdultsDropdown/>
                 </div>
                 <div className="h-[60px]">
                   <KidsDropdown/>
                 </div>       
               </div>
               <button className="btn btn-large btn-primary w-full h-[60px]">Book Now for ${room.price}</button>
             </div>

             {/* Rules */}
             <div >
               <h3 className="h3">Hotel Rules</h3>
               <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse tempus aliquet mi at tempor</p>
               <ul className="flex flex-col gap-y-4">
                 <li className="flex items-center gap-x-4">
                   <FaCheck className="text-accent"/>
                   CheckIn: 3:00 PM - 9:00 PM
                 </li>
                 <li className="flex items-center gap-x-4">
                   <FaCheck className="text-accent"/>
                   CheckOut: 10:30 AM
                 </li>
                 <li className="flex items-center gap-x-4">
                   <FaCheck className="text-accent"/>
                   No Pets
                 </li>
                 <li className="flex items-center gap-x-4">
                   <FaCheck className="text-accent"/>
                   No Smoking
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </section>
  );
};

export default RoomDetails;
