import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className=" bg-[#0D2427] flex max-[700px]:flex-col max-[700px]:items-center   justify-evenly py-16"
    >
      <div className=" max-[700px]:max-w-[90vw]">
        {/* Left */}
        <div className="footer_bottom_left">
          <p>Actor in Mumbai</p>
          <h3>RAJESH GANESH SHARMA</h3>
          <p>Actor</p>
        </div>
        {/* Right */}
        <div className="footer_bottom_right max-[700px]:mt-10">
          <p>Designed and Developed By</p>
          <h3>OrbTech Agency</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
