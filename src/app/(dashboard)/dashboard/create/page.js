import Link from "next/link";

const CreateEvent = () => {
  return (
    <div>
      <h1 className="md:text-3xl font-extrabold text-center my-12">
        Choose a event type
      </h1>

      <div className="flex md:flex-row justify-center gap-8 items-center flex-col">
        <div className="md:w-[300px] w-full border-2 hover:shadow-lg border-blue-500 h-[330px] p-6 rounded-md space-y-8">
          <h1 className="text-2xl font-semibold text-center my-4 text-black">
            One-on-One
          </h1>
          <p className="h-[80px]">
            Help clients and colleagues find a time to book with me. Good for
            sales executives, realtors, HR consultants
          </p>

          <div className="text-center ">
            <Link href={"/dashboard/createNewEvent"}>
              <button className="text-lg py-2 px-4 rounded-md before:block before:absolute hover:before:bg-pink-300 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform  font-medium bg-transparent border-2 overflow-hidden border-blue-500 duration-500">
                Visit Page
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-[300px] w-full border-2 hover:shadow-lg border-blue-500 h-[330px] p-6 rounded-md space-y-8">
          <h1 className="text-2xl font-semibold text-center mt-4 text-black">
            Group Sessions
          </h1>
          <p className="h-[80px]">
            Help clients book a seat in one of the upcoming sessions. Good for
            yoga classes, virtual events.
          </p>

          <div className="text-center ">
            <Link href={"/dashboard/teamEvent"}>
              <button className="text-lg py-2 px-4 rounded-md before:block before:absolute hover:before:bg-pink-300 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform  font-medium bg-transparent border-2 overflow-hidden border-blue-500 duration-500">
                Visit Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
