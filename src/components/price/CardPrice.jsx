import { FaCheck } from "react-icons/fa6";

const CardPrice = ({dolar, popularity, learn, amount, time, svg}) => {
    return (
      <div className="md:w-[300px] mx-auto rounded-lg space-y-8 shadow-xl my-20 relative p-8 bg-purple-300 hover:bg-purple-800 animate-pulse text-white">
        
          {/* top part  */}
          <div>
              
              {/* Price Ribbon SVG  */}
              <div className="absolute -top-4 -right-[20px] ">
                  <div className="w-full h-full relative">
                      {/* svg  */}
                      {svg}
                      {/* Price  */}
                      <div className="absolute top-8 left-7 text-white text-xl font-semibold flex flex-col">
                          <span>
                              <sub className="font-normal text-sm hover:text-white">{dolar}</sub>
                              <span>{amount}</span>
                          </span>
                          <span className="text-xs font-normal hover:text-white">/{time}</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="space-y-4">
              <div className="flex flex-row">
                <p className="text-gray-800 text-3xl capitalize hover:text-white ">{popularity}</p>
              <button className="btn-primary ">{learn}</button>
              </div>
              <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-sky-900 font-semibold hover:text-white">
                      <FaCheck/>
                      Custom profile an more
                  </li>
                  <li className="flex items-center gap-2 text-sm text-sky-900 font-semibold hover:text-white">
                  <FaCheck/>
                      Custom emoji anywhere
                  </li>
                  <li className="flex items-center gap-2 text-sm text-sky-900 font-semibold hover:text-white">
                  <FaCheck/>
                      
                      HD video streaming
                  </li>
              </ul>
              <div className="pt-4 flex flex-col justify-center">
                  <button className="w-full h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group">
                      <span className="absolute w-12 group-hover:w-[93%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                      Get Started For Free
                  </button>
                  <p className="text-center hover:text-white">No credit card required</p>
              </div>
          </div>
      </div>
    );
};
export default CardPrice;