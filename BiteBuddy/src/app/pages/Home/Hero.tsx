// export function Hero() {
//   return (
//     <>

//     </>
//   );
// }

import { FunctionComponent } from "react";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-0 pl-[5px] box-border max-w-full text-left text-base text-white font-poppins mt-10">
      <div className="flex-1 rounded-xl bg-gray-200 flex flex-row items-start justify-between pt-[45px] pb-0 pr-0 pl-[57px] box-border relative max-w-full gap-[20px] mq850:pt-[29px] mq850:box-border mq1525:flex-wrap mq1525:pl-5 mq1525:pr-5 mq1525:pb-5 mq1525:box-border">
        <div className="h-[610px] w-[1528px] relative rounded-xl bg-gray-200 hidden max-w-full z-[0]" />
        <div className="flex flex-col items-start justify-start pt-[89px] px-0 pb-0 box-border min-w-[509px] max-w-full mq450:pt-[58px] mq450:box-border mq850:min-w-full mq1525:flex-1">
          <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="relative leading-[66px] inline-block max-w-full z-[6]">
                Order Restaurant food, takeaway and groceries.
              </div>
              <h1 className="m-0 relative text-35xl leading-[66px] font-semibold font-inherit z-[5] mt-[-13px] mq450:text-13xl mq450:leading-[40px] mq850:text-24xl mq850:leading-[53px]">
                <p className="m-0">Feast Your Senses,</p>
                <p className="m-0 text-darkorange">Fast and Fresh</p>
              </h1>
            </div>
            <div className="w-[467px] flex flex-col items-start justify-start gap-[8px] max-w-full text-smi mq850:w-[127px]">
              <div className="w-[340px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full mq850:hidden">
                <div className="flex-1 relative leading-[43px] z-[5]">
                  Enter a postcode to see what we deliver
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <input
                  className="w-full [border:none] [outline:none] bg-white h-[61px] flex-1 rounded-101xl flex flex-col items-start justify-start pt-px px-7 pb-[3px] box-border font-poppins text-mini text-gray-400 min-w-[224px] max-w-full"
                  placeholder="e.g. EC4R 3TE"
                  type="text"
                />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[188px] flex flex-row items-start justify-start ml-[-94px]">
                  <div className="h-[61px] w-[188px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                    <div className="self-stretch flex-1 relative rounded-101xl bg-darkorange z-[6]" />
                  </div>
                  <b className="relative text-base leading-[66px] inline-block font-poppins text-white text-left min-w-[58px] whitespace-nowrap z-[7] ml-[-122px]">
                    Search
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[541px] w-[813px] absolute !m-[0] bottom-[0px] left-[342px]">
          <img
            className="absolute top-[4px] left-[0px] w-full h-full object-cover z-[4]"
            alt=""
            src="public\Images\Girl.svg"
          />
          {/* <img
            className="w-96 h-96 rounded-tl-xl rounded-tr-xl"
            src="https://via.placeholder.com/377x455"
          /> */}
          <img
            // className="absolute h-full top-[0px] bottom-[0px] left-[348px] max-h-full w-[465px] object-cover z-[5]"
              className="w-96 h-96 rounded-tl-xl rounded-tr-xl"
            alt=""
            src="public\Girl2.svg"
          />
        </div>
        <div className="h-[565px] w-[626px] rounded-tl-263xl-5 rounded-tr-none rounded-br-xl rounded-bl-none bg-darkorange flex flex-col items-start justify-start pt-[11px] pb-10 pr-0 pl-32 box-border gap-[42px] min-w-[626px] max-w-full z-[1] text-49xl text-[transparent] mq450:pl-5 mq450:box-border mq850:gap-[21px] mq850:pl-16 mq850:pt-5 mq850:pb-[26px] mq850:box-border mq850:min-w-full mq1525:flex-1">
          <div className="w-[626px] h-[565px] relative rounded-tl-263xl-5 rounded-tr-none rounded-br-xl rounded-bl-none bg-darkorange hidden max-w-full" />
          <div className="w-[390px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[41px]">
              <div className="w-[25px] relative font-semibold inline-block [-webkit-text-stroke:1px_#fff] z-[2] mq450:text-22xl mq850:text-35xl">
                1
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[22px] px-7 pb-[34px] box-border bg-[url('/public/notification-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[6] mt-[-46px] text-xs text-black">
              <img
                className="h-[127px] w-[390px] relative object-cover hidden max-w-full"
                alt=""
                src="/notification-1@2x.png"
              />
              <div className="w-[236px] bg-whitesmoke flex flex-col items-start justify-start pt-1.5 px-[5px] pb-[3px] box-border gap-[10px] z-[1]">
                <div className="w-[236px] h-[71px] relative bg-whitesmoke hidden" />
                <img
                  className="w-[58px] h-[15px] relative object-contain z-[2]"
                  alt=""
                  src="/logo-2@2x.png"
                />
                <div className="w-[198px] flex flex-col items-start justify-start gap-[1px]">
                  <div className="relative font-semibold z-[7]">
                    We’ve Received your order!
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[17px] pl-0">
                      <input
                        className="w-[calc(100%_-_87px)] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] flex-1 relative text-gray-400 text-left inline-block min-w-[119px] p-0 z-[7]"
                        placeholder="Awaiting Restaurant acceptance "
                        type="text"
                      />
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 ml-[-29px]">
                        <img
                          className="w-3 h-3 relative object-cover z-[8]"
                          alt=""
                          src="/tracking@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-end max-w-full">
            <div className="self-stretch w-[448px] flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="w-[390px] flex flex-row items-start justify-start relative max-w-full">
                  <div className="w-10 absolute !m-[0] top-[-59px] right-[36px] font-semibold inline-block [-webkit-text-stroke:1px_#fff] z-[2] mq450:text-22xl mq850:text-35xl">
                    2
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start pt-[22px] px-7 pb-[34px] box-border bg-[url('/public/notification-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[3] text-xs text-black">
                    <img
                      className="h-[127px] w-[390px] relative object-cover hidden max-w-full"
                      alt=""
                      src="/notification-1@2x.png"
                    />
                    <div className="w-[236px] bg-whitesmoke flex flex-col items-start justify-start pt-1.5 px-[3px] pb-px box-border gap-[2px] z-[1]">
                      <div className="w-[236px] h-[71px] relative bg-whitesmoke hidden" />
                      <div className="flex flex-col items-start justify-start gap-[11px]">
                        <img
                          className="w-[60px] h-[15px] relative object-contain z-[2]"
                          alt=""
                          src="/logo-2-1@2x.png"
                        />
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                          <div className="flex flex-row items-start justify-start gap-[18px]">
                            <div className="relative font-semibold inline-block min-w-[101px] z-[4]">{`Order Accepted! `}</div>
                            <img
                              className="h-[17px] w-[17px] relative object-contain z-[4]"
                              alt=""
                              src="/tick-box@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-0.5 text-gray-400">
                        <div className="relative z-[4]">
                          Your order will be delivered shortly
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[390px] flex-1 flex flex-col items-start justify-start max-w-full mt-[-21px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[29px]">
                  <div className="w-[41px] relative font-semibold inline-block [-webkit-text-stroke:1px_#fff] z-[2] mq450:text-22xl mq850:text-35xl">
                    3
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[22px] px-7 box-border bg-[url('/public/notification-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[6] mt-[-46px]">
                  <img
                    className="h-[127px] w-[390px] relative object-cover hidden max-w-full"
                    alt=""
                    src="/notification-1@2x.png"
                  />
                  <div className="w-[111px] bg-whitesmoke flex flex-row items-start justify-start pt-1.5 px-[5px] pb-[7px] box-border z-[1]">
                    <div className="h-7 w-[111px] relative bg-whitesmoke hidden" />
                    <img
                      className="h-[15px] w-[58px] relative object-contain z-[2]"
                      alt=""
                      src="/logo-2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;


