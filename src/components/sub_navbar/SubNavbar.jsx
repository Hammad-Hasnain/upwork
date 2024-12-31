import React from "react";
import { subNavLinks } from "../../utlities/content";
import { GoChevronDown } from "react-icons/go";

const SubNavbar = () => {
  return (
    <nav className="hidden md:flex justify-between items-center p-4 border text-[14px]">
      <div className="flex gap-5 ">
        <ul className="flex gap-5">
          {subNavLinks.map((e, i) => (
            <li key={i}>{e.link}</li>
          ))}
          <li>
            <button className="flex items-center">
              <span>More</span>
              <GoChevronDown />
            </button>
          </li>
          <li>
            <button className="flex items-center">
              <span>More</span>
              <GoChevronDown />
            </button>
          </li>
          <li>
            <button className="flex items-center">
              <span>More</span>
              <GoChevronDown />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;
