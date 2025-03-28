import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black lg:flex lg:flex-row grid gap-5  lg:gap-4  justify-center lg:py-20 py-14  h-full ">
        <div className="border-[1px] border-white rounded-2xl lg:w-[370px] w-[350px] mx-3 lg:mx-0  lg:h-[144px] h-[130px]  flex flex-col gap-4  justify-center items-center order-2 lg:order-1 ">
          <p className="text-[#0796EF] text-sm lg:text-base font-bold font-oswald ">
            CONNECT WITH US
          </p>
          <div className="flex flex-col gap-1 text-center">
            <div className="flex flex-row gap-3 px-10">
              <img
                src="/telephone.png"
                alt="telephone"
                className="w-[18px] h-[16.95px]"
              />
              <p className="text-[#857878]">+91 9567843340</p>
            </div>
            <div className="flex flex-row gap-3">
              <img
                src="/msgg.png"
                alt="telephone"
                className="w-[18px] h-[16.95px] mt-[3px] "
              />
              <p className="text-[#857878]  ">info@deepnetsoft.com</p>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-white rounded-2xl lg:w-[370px] w-[350px] mx-3 lg:mx-0  lg:h-[144px] h-[130px]   relative  order-first lg:order-2 ">
          <img
            src="/deep.png"
            alt="dnslogo"
            className="lg:w-[86px] w-16 absolute  lg:top-[-50px] top-[-40px] left-[40%] "
          />
          <div className="px-14 lg:py-14 py-10 flex flex-col gap-2  ">
            <h3 className="text-[#0796EF] lg:text-4xl text-2xl font-bold lg:font-normal px-7 lg:px-0 ">
              {" "}
              DEEP <span className="text-white"> NET</span>{" "}
              <span className="text-[#857878]">SOFT</span>
            </h3>
            <div className="flex gap-3 px-20 ">
              <img
                src="/fb.png"
                alt="facebook"
                className="w-[18px] h-[16.95px]"
              />
              <img
                src="/twitter.png"
                alt="twitter"
                className="w-[18px] h-[16.95px]"
              />
              <img
                src="/youtub.png"
                alt="youtube"
                className="w-[18px] h-[16.95px]"
              />
              <img
                src="/insta.png"
                alt="instagram"
                className="w-[18px] h-[16.95px]"
              />
            </div>
          </div>
        </div>
        <div className="border-[1px] border-white rounded-2xl lg:w-[370px] w-[350px] mx-3 lg:mx-0  lg:h-[144px] h-[130px]  flex flex-col justify-center items-center gap-4 order-last lg:order-3">
          <p className="text-[#0796EF] font-bold font-oswald ">FIND US</p>
          <div className="flex gap-3 ">
            <div>
              <img
                src="/location.png"
                alt="location"
                className="w-[18px] h-[16.95px]"
              />
            </div>
            <div>
              <p className="text-[#857878] ">
                First floor, Geo infopark,
                <br />
                Infopark EXPY, Kakkanad
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#121618] w-full py-12 lg:py-3 h-[45px] text-center lg:flex lg:justify-between lg:px-44 pt-3 text-[#D9D9D9] ">
       
        <div>
          <p className="text-[11px] lg:text-base" >© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        </div>
        <div className="lg:flex flex flex-row gap-4  text-center justify-center  text-[10px] lg:text-base ">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
