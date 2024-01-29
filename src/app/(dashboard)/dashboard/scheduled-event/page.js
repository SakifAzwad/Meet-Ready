import EventCard from "@/components/EventCard/EventCard";
import { FaMagnifyingGlass } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex flex-col justify-start mt-16 space-y-5">
      <h1 className="text-2xl font-semibold pl-2 border-l-2 border-purple-500">
        Scheduled Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* <EventCard  /> */}
        
      </div>
    </div>
  );
};

export default page;
