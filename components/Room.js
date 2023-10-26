import React from "react";
//Link
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300  w-full "
          src={room.image}
          alt="roomimage"
          loading="lazy"
        />
      </div>

      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] flex justify-center items-center -translate-y-1/2 font-tertiary font-semibold uppercase tracking-[1px] text-base">
         <div className="flex justify-between w-[80%]">
          <div className="flex items-center gap-x-2 ">
           <div className="text-accent">
             <BsArrowsFullscreen className="text-[15px]"/>
           </div>
           <div className="flex gap-x-1">
             <div>Size</div>
             <div>{room.size}m^2</div>
           </div>
          </div>

          <div className="flex items-center gap-x-2 ">
           <div className="text-accent">
             <BsPeople className="text-[18px]"/>
           </div>
           <div className="flex gap-x-1">
             <div>Max People</div>
             <div>{room.maxPerson}</div>
           </div>
          </div>

         </div>

      </div>

        {/* name */}
        <div className="text-center">
            <Link to={`/room/${room.id}`}>
               <h3 className="h3">{room.name}</h3>
            </Link>
            <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">{room.description.slice(0,76)}</p>
          </div>

        {/* Button */}
         <Link to={`room/${room.id}`} className="btn btn-secondary btn-sm max-w-[240px] mx-auto">Book Now for ${room.price}</Link>

    </div>
  );
};

export default Room;
