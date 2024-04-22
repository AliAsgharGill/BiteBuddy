const TopNavbar = () => {
  return (
    <>
      <div className="h-16 flex justify-evenly bg-neutral-50 rounded-bl-xl rounded-br-xl border border-black border-opacity-10">
        <div className="flex">
          <div className="text-black text-2xl font-medium font-['Poppins']">
            🌟
          </div>

          <div className="flex">
            <span className="text-black text-base font-medium font-['Poppins']">
              {" "}
              Get 5% Off your first order,
            </span>
            <span className="text-amber-500 text-base font-bold font-['Poppins'] underline">
              {" "}
              Promo: ORDER5
            </span>
          </div>
        </div>
        <div className="flex">
          <img className="w-6 h-6" src="https://via.placeholder.com/25x25" />
          <span className="text-slate-950 text-base font-medium font-['Poppins']">
            Regent Street,{" "}
          </span>
          <span className="text-slate-950 text-base font-medium font-['Poppins'] underline">
            A4
          </span>
          <span className="text-slate-950 text-base font-medium font-['Poppins']">
            , A4201, London
          </span>
        </div>
        <div className="text-amber-500 text-sm font-medium font-['Poppins'] underline">
          Change Location
        </div>

        <div className="w-96 h-16 relative">
          <div className="w-96 h-16 left-0 top-0 absolute bg-green-700 rounded-bl-xl rounded-br-xl border border-black border-opacity-10" />
          <img
            className="w-11 h-11 left-[24px] top-[15px] absolute"
            src="https://via.placeholder.com/43x43"
          />
          <div className="w-16 h-px left-[88px] top-0 absolute origin-top-left rotate-90 opacity-30 border border-white"></div>
          <div className="w-16 h-px left-[200px] top-0 absolute origin-top-left rotate-90 opacity-30 border border-white"></div>
          <div className="w-16 h-px left-[316px] top-0 absolute origin-top-left rotate-90 opacity-30 border border-white"></div>
          <div className="left-[218px] top-[23px] absolute text-white text-base font-semibold font-['Poppins']">
            GBP 79.89
          </div>
          <div className="left-[109px] top-[23px] absolute text-white text-base font-semibold font-['Poppins']">
            23 Items
          </div>
          <img
            className="w-9 h-9 left-[364px] top-[17px] absolute origin-top-left rotate-90"
            src="https://via.placeholder.com/38x38"
          />
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
