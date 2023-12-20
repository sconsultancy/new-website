import React from "react";

function Footer() {
  return (
    <div className="bg-[#0D2427]">
      <div
        id="footer"
        className=" flex max-[700px]:flex-col max-[700px]:items-center   max-[700px]:max-w-[90vw]   justify-evenly py-16"
      >
        {/* Left */}
        <div className="footer_bottom_left max-[700px]:w-3/5">
          <p>Actor in Mumbai</p>
          <h3>RAJESH GANESH SHARMA</h3>
          <p>Actor</p>
        </div>
        {/* Right */}
        <div className="footer_bottom_right max-[700px]:mt-10 max-[700px]:w-3/5 ">
          <p>Designed and Developed By</p>
          <h3>OrbTech Agency</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
