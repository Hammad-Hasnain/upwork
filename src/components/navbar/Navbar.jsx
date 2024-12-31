import React, { useState } from "react";
import { logo } from "../../assets/images";
import { FiSearch } from "react-icons/fi";
import { navLinks } from "../../utlities/content";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [resLeftNav, setResLetleftNav] = useState({
    title: "",
    isBtnClicked: false,
  });
  return (
    <>
      <nav className="flex justify-between items-center p-4 border text-[14px] bg-[#fff]">
        <div className="flex gap-5 ">
          <button
            className={`${
              isActive ? "hidden" : "block"
            } block lg:hidden text-[20px]`}
            onClick={() => setIsActive(true)}
          >
            <GiHamburgerMenu />
          </button>
          <button
            className={`${
              isActive ? "block" : "hidden"
            } block lg:hidden text-[20px]`}
            onClick={() => setIsActive(false)}
          >
            <IoCloseSharp />
          </button>
          <img src={logo} alt="" className="w-[82px]" />
          <ul className="hidden lg:flex gap-5">
            {navLinks.map((e, i) => (
              <li key={i}>
                <button className="flex items-center ">
                  <span>{e.link}</span>
                  <GoChevronDown />
                </button>
              </li>
            ))}
            <li>
              <button className="flex items-center">
                <span>Find talent</span>
                <GoChevronDown />
              </button>
            </li>

            <li>Enterprise</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="border-[2px] hidden xl:flex items-center gap-3 p-2 rounded-[25px]">
            <FiSearch />
            <input
              type="text"
              placeholder="Search...."
              className="outline-none"
            />
            <div className="border h-full" />
            <button className="flex items-center">
              <span>Talent</span>
              <GoChevronUp />
            </button>
          </div>
          <div className="hidden xl:flex gap-5">
            <button>Log in</button>
            <button className="bg-[#108a00] text-white rounded-[10px] py-2 px-5">
              Sign up
            </button>
          </div>
          {/* Responsive  */}
          <div className="flex xl:hidden gap-5">
            <button className={isActive ? "hidden" : "block"}>Sign up</button>
            <button className="text-[20px]">
              <FiSearch />
            </button>
          </div>
        </div>
      </nav>
      {/* Responsive left-nav  */}
      <aside
        className={`${
          isActive ? "block" : "hidden"
        } h-[100vh] w-full absolute top-0 z-[-100]`}
      >
        <div className="py-[60px]   h-[100%] overflow-auto ">
          <ul className="text-[14px]">
            {navLinks.map((e, i) => (
              <li key={i} className="my-[10px]">
                <div className="px-[15px] hover:bg-[#A5A5A5]">
                  <button
                    className="flex items-center justify-between w-full py-[20px]"
                    onClick={() => {
                      setResLetleftNav({
                        title: e.link,
                        isBtnClicked: !resLeftNav.isBtnClicked,
                      });
                      console.log(resLeftNav);
                    }}
                  >
                    <span>{e.link}</span>
                    {e.link === resLeftNav.title && resLeftNav.isBtnClicked ? (
                      <GoChevronUp />
                    ) : (
                      <GoChevronDown />
                    )}
                  </button>
                </div>

                <ul
                  className={`${
                    e.link === resLeftNav.title && resLeftNav.isBtnClicked
                      ? "block"
                      : "hidden"
                  } bg-[#fff]`}
                >
                  <li className="ps-[30px] py-[20px] ">lorem</li>
                  <li className="ps-[30px] py-[20px] ">lorem</li>
                  <li className="ps-[30px] py-[20px] ">lorem</li>
                </ul>
              </li>
            ))}
            <li className="my-[10px]">
              <button className="px-[15px] w-full py-[20px] text-start">
                Log in
              </button>
            </li>
          </ul>
        </div>
        <div className="  shadow p-4 fixed bottom-0 bg-[#fff]  w-full shadow-topShadow">
          <button className="bg-[#108a00] text-white rounded-[10px]  py-2 px-5 w-full ">
            Sign up
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
