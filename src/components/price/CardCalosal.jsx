const CardCalosal = ({name, content, name1}) => {
    return (
      <div className="px-6 h-72 py-6 relative max-w-full text-white bg-gradient-to-r overflow-hidden from-[#d20bd5] via-[#cb6cc8] to-[#bb24ae] group rounded-lg shadow-2xl">
        <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
        <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
        <div className="space-y-6  z-20 relative bottom-4 pt-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="h-36 overflow-y-auto">{content}</p>
          <button className="bg-[#1b8efa] py-2 px-6">{name1}</button>
        </div>
      </div>
    );
  };
  export default CardCalosal;