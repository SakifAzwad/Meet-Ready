"use client";

const BannerCard = () => {
  return (
    <div className="mx-10 relative">
      <div className="w-max py-9 px-6 space-y-3 bg-white border flex flex-col items-center rounded-xl ">
        <div className="bg-purple-400 w-min px-4 absolute -top-4 -left-4 text-white font-semibold text-2xl py-2 rounded">
          3
        </div>
        <div className="border  rounded-full">
          <div className="p-6">hel</div>
        </div>
        <div className="text-center pb-4">
          <h2 className="font-bold text-lg pb-2">Thanks for booking!</h2>
          <p className="text-gray-400 text-sm">
            You&apos;ll receive an email with a calendar invite.
          </p>
        </div>
        <div className="space-y-6 ">
          <div className="h-5 w-48 rounded-full bg-purple-50"></div>
          <div className="h-5 w-48 rounded-full bg-purple-50"></div>
          <div className="h-5 w-48 rounded-full bg-purple-50"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
