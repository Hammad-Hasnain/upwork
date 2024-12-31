import React, { useState } from "react";
import { logo } from "../../assets/images";
import { FiSearch } from "react-icons/fi";
import { footerSections, navLinks } from "../../utlities/content";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { LiaFacebook } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { PiAppleLogoLight } from "react-icons/pi";
import { IoLogoAndroid } from "react-icons/io";

const Footer = () => {
  const [resFoot, setResFoot] = useState({
    title: "",
    isBtnClicked: false,
  });
  return (
    <footer className="bg-[#181818] p-[1em] md:p-[5em] mx-[20px] rounded-[7px]">
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="col-span-1">
          <h1 className="mb-[20px] pb-[20px]  border-b border-[gray] md:border-0 ">
            <button
              className="w-full flex items-center justify-between text-[white] text-[16px] font-[600] "
              onClick={() => {
                if (window.innerWidth < 761) {
                  console.log("sjfasdjlf");
                  setResFoot({
                    title: "For Clients",
                    isBtnClicked: !resFoot.isBtnClicked,
                  });
                }
              }}
            >
              <span>For Clients</span>
              <span className={` inline-block md:hidden`}>
                <GoChevronDown />
              </span>
            </button>
          </h1>
          <ul
            className={`${
              resFoot.isBtnClicked && resFoot.title === "For Clients"
                ? "block"
                : "hidden "
            } md:block ps-[20px] mb-[20px]`}
          >
            {footerSections[0].items.map((e, i) => (
              <li key={i}>
                <a
                  href={e.link}
                  className="text-[white] text-[13px] hover:underline inline-block py-[10px]"
                >
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="pb-[20px]  mb-[20px] border-b border-[gray] md:border-0 ">
            <button
              className="w-full flex items-center justify-between text-[white] text-[16px] font-[600]"
              onClick={() => {
                if (window.innerWidth < 761) {
                  console.log("sjfasdjlf");
                  setResFoot({
                    title: "For Talent",
                    isBtnClicked: !resFoot.isBtnClicked,
                  });
                }
              }}
            >
              <span>For Talent</span>
              <span className={``}>
                <GoChevronDown />
              </span>
            </button>
          </h1>
          <ul
            className={`${
              resFoot.isBtnClicked && resFoot.title === "For Talent"
                ? "block"
                : "hidden "
            } md:block ps-[20px] mb-[20px]`}
          >
            {footerSections[1].items.map((e, i) => (
              <li key={i}>
                <a
                  href={e.link}
                  className="text-[white] text-[13px] hover:underline inline-block py-[10px]"
                >
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="pb-[20px]  mb-[20px] border-b border-[gray] md:border-0">
            <button
              className="w-full flex items-center justify-between text-[white] text-[16px] font-[600]"
              onClick={() => {
                if (window.innerWidth < 761) {
                  setResFoot({
                    title: "Help & support",
                    isBtnClicked: !resFoot.isBtnClicked,
                  });
                }
              }}
            >
              <span>Help & support</span>
              <span className={``}>
                <GoChevronDown />
              </span>
            </button>
          </h1>
          <ul
            className={`${
              resFoot.isBtnClicked && resFoot.title === "Help & support"
                ? "block"
                : "hidden "
            } md:block ps-[20px] mb-[20px]`}
          >
            {footerSections[2].items.map((e, i) => (
              <li key={i}>
                <a
                  href={e.link}
                  className="text-[white] text-[13px] hover:underline inline-block py-[10px]"
                >
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="pb-[20px]  mb-[20px] border-b border-[gray] md:border-0">
            <button
              className="w-full flex items-center justify-between text-[white] text-[16px] font-[600]"
              onClick={() => {
                if (window.innerWidth < 761) {
                  setResFoot({
                    title: "About us",
                    isBtnClicked: !resFoot.isBtnClicked,
                  });
                }
              }}
            >
              <span>About us</span>
              <span className={``}>
                <GoChevronDown />
              </span>
            </button>
          </h1>
          <ul
            className={`${
              resFoot.isBtnClicked && resFoot.title === "About us"
                ? "block"
                : "hidden "
            } md:block ps-[20px] mb-[20px]`}
          >
            {footerSections[3].items.map((e, i) => (
              <li key={i}>
                <a
                  href={e.link}
                  className="text-[white] text-[13px] hover:underline inline-block py-[10px]"
                >
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="block md:flex justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-[10px] mt-[3em]">
          <h6 className="font-[500] text-[white] ">Follow us</h6>
          <ul className="flex gap-[10px]">
            <li>
              <a
                href="#"
                className="p-[5px] inline-block border  rounded-[50%] cursor-pointer hover:bg-[#a5a5a5]"
              >
                <LiaFacebook className="text-[white] text-[25px]" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-[5px] inline-block border  rounded-[50%] cursor-pointer hover:bg-[#a5a5a5]"
              >
                <FaLinkedin className="text-[white] text-[25px]" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-[5px] inline-block border  rounded-[50%] cursor-pointer hover:bg-[#a5a5a5]"
              >
                <FaXTwitter className="text-[white] text-[25px]" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-[5px] inline-block border  rounded-[50%] cursor-pointer hover:bg-[#a5a5a5]"
              >
                <FaYoutube className="text-[white] text-[25px]" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-[5px] inline-block border  rounded-[50%] cursor-pointer hover:bg-[#a5a5a5]"
              >
                <FaInstagram className="text-[white] text-[25px]" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-[10px] mt-[3em]">
          <h6 className="font-[500] text-[white] ">Mobile App</h6>
          <ul className="flex gap-[10px]">
            <li>
              <a
                href="#"
                className="p-[5px] border rounded-[50%] inline-block cursor-pointer hover:bg-[#a5a5a5]"
              >
                <PiAppleLogoLight className="text-[white] text-[25px]" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-[5px] border rounded-[50%] inline-block cursor-pointer hover:bg-[#a5a5a5]"
              >
                <IoLogoAndroid className="text-[white] text-[25px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-[20px]" />
      <div className="block md:flex gap-[40px]">
        <p className="py-[10px] font-[600] text-[white]">
          &copy; 2015 - 2024 Upwork&reg; Global Inc.
        </p>
        <ul className="block md:flex gap-[20px]">
          <li>
            <a
              href="#"
              className="py-[10px] text-[14px] inline-block text-[white]"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-[10px] text-[14px] inline-block text-[white]"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-[10px] text-[14px] inline-block text-[white]"
            >
              CA Notice at Collection
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-[10px] text-[14px] inline-block text-[white]"
            >
              Cookie Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-[10px] text-[14px] inline-block text-[white]"
            >
              Accessibility
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
