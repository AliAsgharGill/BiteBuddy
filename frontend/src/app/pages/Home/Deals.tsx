import React from "react";
import { Button } from "antd";

const Deals: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center ">
        <h1 className="text-center">Up to -40% off 🎊 on exclusive deals</h1>
        <div className="  flex  justify-between flex-wrap space-x-1 ">            
          <Button>Vegan</Button>
          <Button>Sushi</Button>
          <Button>Pizza & FastFood</Button>
          <Button>others</Button>
        </div>
      </div>
      <div>
        <div className="flex overflow-hidden relative flex-col justify-center max-w-[496px] min-h-[325px] shadow-xl rounded-md -hover:translate-y-5 transition duration-500 hover:cursor-pointer ">
          <img
            loading="lazy"
            src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative w-full rounded-xl min-h-[325px] max-md:max-w-full" />
        </div>
      </div>
    </>
  );
};

export default Deals;
