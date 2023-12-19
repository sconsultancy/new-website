"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#info" },
  { name: "Gallery", href: "#gallery" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", checkTop);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", checkTop);
    };
  }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  // For Checking Top
  function checkTop() {
    var component = document.getElementById("navbar");
    var distanceToTop = component.getBoundingClientRect().top;
    if (distanceToTop <= 0) {
      component.classList.add("sticky");
    }
  }

  // For Button Click
  const handleNavBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div id="navbar">
        {/* <div className=" text-white flex justify-center">Name</div> */}
        <div className=" flex justify-center max-md:hidden">
          {navigationLinks.map((e, i) => {
            return (
              <Link
                className="text-white m-6 text-2xl inline"
                href={e.href}
                key={i}
              >
                {e.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" hidden max-md:flex">
        <div className=" bg-white h-20 w-20 rounded-full fixed top-3  right-10 flex items-center justify-center z-50   ">
          <button onClick={handleNavBurgerClick} className="z-50">
            <div className=" flex flex-col ">
              <div
                className={`bg-black h-1 w-8 rounded-full mb-1 ${
                  open ? "" : "rotate-45 relative top-1"
                } `}
              ></div>
              <div
                className={`bg-black h-1 w-8 rounded-full  mb-1 ${
                  open ? "" : "hidden"
                }`}
              ></div>
              <div
                className={`bg-black h-1 w-8 rounded-full mb-1 ${
                  open ? "" : "-rotate-45 relative bottom-1"
                }`}
              ></div>
            </div>
          </button>
        </div>
        {/* Modal */}
        <div
          className={` fixed ${
            open ? "flex" : "hidden"
          } justify-center items-center h-screen w-screen left-0 top-0 light_glass  z-20 `}
        >
          <div className="bg-white flex flex-col absolute right-0 top-0 pt-20 h-screen w-[50vw] items-center ">
            {navigationLinks.map((e, i) => {
              return (
                <Link
                  className="text-black m-6 text-2xl "
                  href={e.href}
                  key={i}
                >
                  {e.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
