const Loading = () => {
  return (
    <div>
      <div class="w-full h-full fixed top-0 left-0 bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]  z-50">
        <div class="flex justify-center items-center mt-[50vh]">
          <div class="fas fa-circle-notch fa-spin fa-5x text-violet-600 ">
            <span className="text-6xl loading loading-spinner text-primary loading-lg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
