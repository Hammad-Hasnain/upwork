import React from "react";
import Navbar from "../components/Navbar/navbar";
import SubNavbar from "../components/sub_navbar/SubNavbar";
import { FaCrown, FaPlayCircle, FaRegStar, FaStar } from "react-icons/fa";
import {
  airbnbLogo,
  bissellLogo,
  employee1,
  enterpriseHandler,
  findGreatWork,
  microsoftLogo,
  personWithHeadset,
  sec1ImgRight,
  ukraineHelp,
  upworkWorking,
} from "../assets/images";
import { MdOutlinePalette } from "react-icons/md";
import { SlTag } from "react-icons/sl";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoMdTrendingUp } from "react-icons/io";
import { GoArrowRight, GoChevronDown } from "react-icons/go";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RxDrawingPinFilled } from "react-icons/rx";
import { RiShieldStarLine } from "react-icons/ri";
import { BsSuitcaseLg } from "react-icons/bs";
import Footer from "../components/footer/Footer";
import { GiUpgrade } from "react-icons/gi";
import { employees, freelancerData } from "../utlities/content";

const Home = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <main className="px-[1em] lg:px-[4em] xl:px-[6em] py-[4em]">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 ">
          <div className="border rounded-[20px] col-span-8 p-[1em]  flex justify-between">
            <div className="pt-[3em] pl-[3em]">
              <h1 className="text-[42px] font-[600] mb-[10px]">
                We connect people to <br /> bring projects to life
              </h1>
              <p>
                Find high-quality talent or open jobs with <br /> the help of AI
                tools that keep you in control.
              </p>
              <button className="border shadow-lg px-5 py-2 rounded-[10px] my-5">
                "How does upwork work?"
              </button>
              <div className="border border-[3px] border-black w-[fit-content] p-1 pl-5 rounded-[25px] flex items-center mb-[2em]">
                <input
                  type="text"
                  placeholder="Ask Ai anything..."
                  className="focus:outline-none"
                />
                <button>
                  <FaPlayCircle className="text-[40px]" />
                </button>
              </div>
              <p>Trusted By</p>
              <div className="flex gap-3">
                <img src={microsoftLogo} alt="microsoft" />
                <img src={airbnbLogo} alt="airbnb" />
                <img src={bissellLogo} alt="bissel" />
              </div>
            </div>
            <div>
              <img src={sec1ImgRight} alt="" className="w-[182px]" />
            </div>
          </div>
          <div className="hidden lg:block border rounded-[20px] col-span-4">
            <h4 className="p-5 font-bold text-[22px]">
              Trending Upwork projects
            </h4>
            <div className="p-5 ">
              <h5 className="flex justify-between items-center mb-2 font-bold text-[20px] ">
                <span>Branded Digital Assets</span>
                <span className="bg-[#f1fad9] p-2 rounded-[50%]">
                  <MdOutlinePalette />
                </span>
              </h5>
              <p className="flex items-center mb-2 text-[18px] ">
                <SlTag className="" />
                <span className="ml-2">Typically</span>
              </p>
              <p className="flex items-center mb-2 text-[16px]">
                <FaStar className="text-[#debe1a]" />
                <span className="ml-2">4.7</span>
              </p>
            </div>
            <div className="p-5 border-y">
              <h5 className="flex justify-between items-center mb-2 font-bold text-[20px] ">
                <span>Branded Digital Assets</span>
                <span className="bg-[#f1fad9] p-2 rounded-[50%]">
                  <LiaLaptopCodeSolid />
                </span>
              </h5>
              <p className="flex items-center mb-2 text-[18px] ">
                <SlTag className="" />
                <span className="ml-2">Typically</span>
              </p>
              <p className="flex items-center mb-2 text-[16px]">
                <FaStar className="text-[#debe1a]" />
                <span className="ml-2">4.7</span>
              </p>
            </div>
            <div className="p-5 ">
              <h5 className="flex justify-between items-center mb-2 font-bold text-[20px] ">
                <span>Branded Digital Assets</span>
                <span className="bg-[#f1fad9] p-2 rounded-[50%]">
                  <MdOutlinePalette />
                </span>
              </h5>
              <p className="flex items-center mb-2 text-[18px] ">
                <SlTag className="" />
                <span className="ml-2">Typically</span>
              </p>
              <p className="flex items-center mb-2 text-[16px]">
                <FaStar className="text-[#debe1a]" />
                <span className="ml-2">4.7</span>
              </p>
            </div>
          </div>
        </section>

        <section className="my-[4em]">
          <div>
            <p className="text-10px text-[gray]">Looking to hire?</p>
            <h1 className="text-[34px] font-bold my-3">Explore top talent</h1>
            <div className="mb-5">
              <button className="rounded-[25px] border-2  px-5 py-2 flex items-center gap-2 ">
                <IoMdTrendingUp className="text-[green]" />
                <span>Popular</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {freelancerData.map((e, i) => (
              <div
                key={i}
                className="border col-span-1 rounded-[15px] flex justify-between p-5"
              >
                <div>
                  <h6 className="text-[16px]">{e.name}</h6>
                  <h4 className="text-[20px] my-5">{e.title}</h4>
                  <p className="flex text-[16px]">
                    <span className="mr-5">{e.hourlyRate}</span>
                    <span className="p-1 border border-[blue] rounded-[50%]">
                      <FaCrown className="text-[blue]" />
                    </span>
                    <span>{e.jobSuccess}</span>
                  </p>
                  <div className="mt-9 flex gap-2">
                    {e.skills.map((skill, skillIndex) => (
                      <button
                        key={skillIndex}
                        className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 "
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-between  items-center">
                  <img src={e.image} alt="employee" className="rounded-[50%]" />
                  <button className="p-3 cursor-pointer border border-[green] w-[fit-content] rounded-[50%] text-white text-[16px] bg-[#108a00]">
                    <GoArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* view more */}
          <button className="my-5 mx-auto flex items-center gap-2 bg-[#108a00] text-white px-5 py-2 rounded-[10px]">
            <GoChevronDown />
            <span>View more talent</span>
          </button>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-4 bg-[#f2f7f2] flex rounded-[15px] overflow-hidden">
            <img src={upworkWorking} alt="" />
          </div>
          <div className="col-span-8  px-5">
            <div>
              <h1 className="text-[48px]">Up your work game, it’s easy</h1>
              <div className="flex items-baseline gap-3 my-3">
                <div className="text-[20px]">
                  <FaRegPenToSquare />
                </div>
                <div>
                  <h5 className="text-[20px]">No cost to join</h5>
                  <p className="text-[16px] text-[gray]">
                    Register and browse talent profiles, explore projects, or
                    even book a consultation.
                  </p>
                </div>
              </div>
              <div className="flex items-baseline gap-3 my-3">
                <div className="text-[20px]">
                  <RxDrawingPinFilled />
                </div>
                <div>
                  <h5 className="text-[20px]">No cost to join</h5>
                  <p className="text-[16px] text-[gray]">
                    Register and browse talent profiles, explore projects, or
                    even book a consultation.
                  </p>
                </div>
              </div>
              <div className="flex items-baseline gap-3 my-3">
                <div className="text-[20px]">
                  <RiShieldStarLine />
                </div>
                <div>
                  <h5 className="text-[20px]">No cost to join</h5>
                  <p className="text-[16px] text-[gray]">
                    Register and browse talent profiles, explore projects, or
                    even book a consultation.
                  </p>
                </div>
              </div>
              {/* buttons */}
              <div>
                <button className="bg-[#108a00] text-white rounded-[10px] py-2 px-5 mr-5">
                  Sign up for free
                </button>
                <button className="border border-[#108a00] text-[#108a00] rounded-[10px] py-2 px-5">
                  Learn how to hire
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-[40px] font-bold my-3">
            Browse talent by category
          </h1>
          <p className="mb-5">
            <span className="text-[20px]">Looking for work?</span>
            <a href="#" className="text-[#108a00] text-[20px]">
              Browse jobs
            </a>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {employees.map((e, i) => (
              <div key={i} className="col-span-1">
                <div className="bg-[#f9f9f9] rounded-[10px] p-5">
                  <div className="rounded-[10px] w-[fit-content]">
                    <h1 className="text-[24px] font-[500]">{e.category}</h1>
                    <p className="flex justify-between text-[16px] my-5">
                      <span className="flex items-center gap-2">
                        <FaStar className="text-[#108a00]" />
                        <span>{e.rating}/5</span>
                      </span>
                      <span>{e.reviews} skills</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-[4em]">
          <p className="text-10px text-[gray]">Become a freelancer?</p>
          <h1 className="text-[34px] font-bold my-3">Recently posted jobs</h1>
          <div className="mb-5">
            <button className="rounded-[25px] border-2  px-5 py-2 flex items-center gap-2 ">
              <IoMdTrendingUp className="text-[green]" />
              <span>Popular</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border col-span-1 shadow-lg rounded-[15px] flex justify-between p-5">
              <div>
                <h4 className="text-[24px] font-[500] my-5">
                  Farm Management Flask Web App Development
                </h4>
                <p className="flex text-[16px]">
                  <span className="mr-5">
                    Fixed price Intermediate Est. budget: $150.00
                  </span>
                </p>
                <div className="mt-9 flex gap-2">
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    WordPress
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    AI
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    Python
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between  items-center">
                <span className="bg-[#e5f0f6] text-[#275ec5] p-5 rounded-[50%]">
                  <BsSuitcaseLg />
                </span>
                <button className="p-1 cursor-pointer border border-[green] w-[fit-content] rounded-[50%] text-white text-[28px] bg-[#108a00]">
                  <GoArrowRight />
                </button>
              </div>
            </div>
            <div className="border col-span-1 shadow-lg rounded-[15px] flex justify-between p-5">
              <div>
                <h4 className="text-[24px] font-[500] my-5">
                  Farm Management Flask Web App Development
                </h4>
                <p className="flex text-[16px]">
                  <span className="mr-5">
                    Fixed price Intermediate Est. budget: $150.00
                  </span>
                </p>
                <div className="mt-9 flex gap-2">
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    WordPress
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    AI
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    Python
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between  items-center">
                <span className="bg-[#e5f0f6] text-[#275ec5] p-5 rounded-[50%]">
                  <BsSuitcaseLg />
                </span>
                <button className="p-1 cursor-pointer border border-[green] w-[fit-content] rounded-[50%] text-white text-[28px] bg-[#108a00]">
                  <GoArrowRight />
                </button>
              </div>
            </div>
            <div className="border col-span-1 shadow-lg rounded-[15px] flex justify-between p-5">
              <div>
                <h4 className="text-[24px] font-[500] my-5">
                  Farm Management Flask Web App Development
                </h4>
                <p className="flex text-[16px]">
                  <span className="mr-5">
                    Fixed price Intermediate Est. budget: $150.00
                  </span>
                </p>
                <div className="mt-9 flex gap-2">
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    WordPress
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    AI
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    Python
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between  items-center">
                <span className="bg-[#e5f0f6] text-[#275ec5] p-5 rounded-[50%]">
                  <BsSuitcaseLg />
                </span>
                <button className="p-1 cursor-pointer border border-[green] w-[fit-content] rounded-[50%] text-white text-[28px] bg-[#108a00]">
                  <GoArrowRight />
                </button>
              </div>
            </div>
            <div className="border col-span-1 shadow-lg rounded-[15px] flex justify-between p-5">
              <div>
                <h4 className="text-[24px] font-[500] my-5">
                  Farm Management Flask Web App Development
                </h4>
                <p className="flex text-[16px]">
                  <span className="mr-5">
                    Fixed price Intermediate Est. budget: $150.00
                  </span>
                </p>
                <div className="mt-9 flex gap-2">
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    WordPress
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    AI
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    Python
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between  items-center">
                <span className="bg-[#e5f0f6] text-[#275ec5] p-5 rounded-[50%]">
                  <BsSuitcaseLg />
                </span>
                <button className="p-1 cursor-pointer border border-[green] w-[fit-content] rounded-[50%] text-white text-[28px] bg-[#108a00]">
                  <GoArrowRight />
                </button>
              </div>
            </div>
            <div className="border col-span-1 shadow-lg rounded-[15px] flex justify-between p-5">
              <div>
                <h4 className="text-[24px] font-[500] my-5">
                  Farm Management Flask Web App Development
                </h4>
                <p className="flex text-[16px]">
                  <span className="mr-5">
                    Fixed price Intermediate Est. budget: $150.00
                  </span>
                </p>
                <div className="mt-9 flex gap-2">
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    WordPress
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    AI
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    Python
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between  items-center">
                <span className="bg-[#e5f0f6] text-[#275ec5] p-5 rounded-[50%]">
                  <BsSuitcaseLg />
                </span>
                <button className="p-1 cursor-pointer border border-[green] w-[fit-content] rounded-[50%] text-white text-[28px] bg-[#108a00]">
                  <GoArrowRight />
                </button>
              </div>
            </div>
            <div className="border col-span-1 shadow-lg rounded-[15px] flex justify-between p-5">
              <div>
                <h4 className="text-[24px] font-[500] my-5">
                  Farm Management Flask Web App Development
                </h4>
                <p className="flex text-[16px]">
                  <span className="mr-5">
                    Fixed price Intermediate Est. budget: $150.00
                  </span>
                </p>
                <div className="mt-9 flex gap-2">
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    WordPress
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    AI
                  </button>
                  <button className="rounded-[25px] bg-[#f9f9f9] shadow px-4 py-1 flex items-center gap-2 ">
                    Python
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between  items-center">
                <span className="bg-[#e5f0f6] text-[#275ec5] p-5 rounded-[50%]">
                  <BsSuitcaseLg />
                </span>
                <button className="p-1 cursor-pointer border border-[green] w-[fit-content] rounded-[50%] text-white text-[28px] bg-[#108a00]">
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* view more */}
          <button className="my-5 mx-auto flex items-center gap-2 bg-[#108a00] text-white px-5 py-2 rounded-[10px]">
            <GoChevronDown />
            <span>View more jobs</span>
          </button>
        </section>

        <section
          className=" grid grid-cols-12 border my-[4em] rounded-[8px] 
                overflow-hidden"
        >
          <div className="col-span-12 md:col-span-7 ">
            <div className="h-full p-5 bg-[#13544e] flex flex-col justify-between">
              <h5 className="text-[24px] text-[white] mb-[20px]">
                Enterprise Suite
              </h5>
              <h1 className="text-[56px] text-[white] leading-[48px] mb-[20px]">
                <span>This is how</span>
                <br />
                <span className="text-[#91e6b3]">
                  good companies find good company.
                </span>
              </h1>
              <div className="mb-[20px]">
                <p className="text-[20px] text-[white]">
                  Access the top 1% of talent on Upwork, and a full suite of
                  hybrid workforce management tools. This is how innovation
                  works now.
                </p>
                <p className="flex items-center gap-2">
                  <BsSuitcaseLg className="text-[#91e6b3]" />
                  <span className="text-[white]">
                    Access expert talent to fill your skill gaps
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <BsSuitcaseLg className="text-[#91e6b3]" />
                  <span className="text-[white]">
                    Access expert talent to fill your skill gaps
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <BsSuitcaseLg className="text-[#91e6b3]" />
                  <span className="text-[white]">
                    Access expert talent to fill your skill gaps
                  </span>
                </p>
              </div>
              <button className="w-[fit-content] text-[#108a00] bg-[white] rounded-[10px] py-2 px-5">
                Learn more
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="overflow-hidden h-full">
              <img
                src={enterpriseHandler}
                alt=""
                className="h-full scale-150"
              />
            </div>
          </div>
        </section>

        <section
          className="border my-[4em] rounded-[8px] 
                overflow-hidden bg-find-talent bg-cover bg-center"
        >
          <div className="p-[20px]">
            <div className="text-[white]">
              <h5 className="mb-[3em]  font-[500] text-[24px]">For Clients</h5>
              <h1 className="mb-[20px]  font-[600] text-[64px] leading-none">
                Find Talent <br /> Your way
              </h1>
              <p className="mb-[20px]  font-[500] text-[24px] leading-none">
                Work with the largest network of independent <br />
                professionals and get things done—from <br /> quick turnarounds
                to big transformations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
              <div className="col-span-1">
                <div
                  className=" rounded-[8px] bg-[green] text-[white] 
                            p-[15px]"
                >
                  <h2 className="font-[600] text-[34px] mb-[25px] leading-[34px]">
                    Post a job <br /> and hire a pro
                  </h2>
                  <p className="text-[16px] flex items-center gap-[10px]">
                    <span>
                      Talent Marketplace
                      <sup>TM</sup>
                    </span>
                    <span>
                      <GoArrowRight className="text-[20px] bold" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div
                  className=" rounded-[8px] bg-[green] text-[white] 
                            p-[15px]"
                >
                  <h2 className="font-[600] text-[34px] mb-[25px] leading-[34px]">
                    Post a job <br /> and hire a pro
                  </h2>
                  <p className="text-[16px] flex items-center gap-[10px]">
                    <span>
                      Talent Marketplace
                      <sup>TM</sup>
                    </span>
                    <span>
                      <GoArrowRight className="text-[20px] bold" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div
                  className=" rounded-[8px] bg-[green] text-[white] 
                            p-[15px]"
                >
                  <h2 className="font-[600] text-[34px] mb-[25px] leading-[34px]">
                    Post a job <br /> and hire a pro
                  </h2>
                  <p className="text-[16px] flex items-center gap-[10px]">
                    <span>
                      Talent Marketplace
                      <sup>TM</sup>
                    </span>
                    <span>
                      <GoArrowRight className="text-[20px] bold" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 my-[5em] ">
          <div className="col-span-12 lg:col-span-8 ">
            <div className="rounded-[7px] p-[1em] sm:p-[4em] bg-[#f9f9f9]  ">
              <h1 className="leading-none mt-[20px] font-[600] mb-[40px] text-[52px]">
                Why businesses <br /> turn to Upwork
              </h1>

              <div className="my-5 w-[100%] md:w-[60%] ">
                <div className="mb-[20px]">
                  <h2 className="  flex items-center gap-[10px]">
                    <FaRegStar className="border border-[black] border-[2px] text-[20px] rounded-[50%]" />
                    <span className="text-[34px] font-[500]">
                      Proof of quality
                    </span>
                  </h2>
                  <p className="text-[17px] text-[#676767]  ps-[34px]">
                    Check any pro’s work samples, client reviews, and identity
                    verification.
                  </p>
                </div>
                <div className="mb-[20px]">
                  <h2 className="  flex items-center gap-[10px]">
                    <FaRegStar className="border border-[black] border-[2px] text-[20px] rounded-[50%]" />
                    <span className="text-[34px] font-[500]">
                      Proof of quality
                    </span>
                  </h2>
                  <p className="text-[17px] text-[#676767]  ps-[34px]">
                    Check any pro’s work samples, client reviews, and identity
                    verification.
                  </p>
                </div>
                <div className="mb-[20px]">
                  <h2 className="  flex items-center gap-[10px]">
                    <FaRegStar className="border border-[black] border-[2px] text-[20px] rounded-[50%]" />
                    <span className="text-[34px] font-[500]">
                      Proof of quality
                    </span>
                  </h2>
                  <p className="text-[17px] text-[#676767]  ps-[34px]">
                    Check any pro’s work samples, client reviews, and identity
                    verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4  rounded-[7px] bg-[green] flex items-end p-[1em] sm:p-[4em] relative">
            <div className=" w-full ">
              <h2 className="text-[white] text-[34px] font-[500] leading-none mb-[20px]">
                We're <br /> the world's work <br /> marketplace
              </h2>
              <div>
                <div className="mb-[10px]">
                  <h2 className="text-[white] text-[32px] font-[500] flex gap-[10px] items-center">
                    <span>
                      <FaStar />
                    </span>
                    <span>4.9/5</span>
                  </h2>
                  <p className="text-[white] ps-[42px]">
                    Client rate professionals on Upwork
                  </p>
                </div>
                <div>
                  <h2 className="text-[white] text-[32px] font-[500] flex gap-[10px] items-center">
                    <span>
                      <GiUpgrade />
                    </span>
                    <span>4.9/5</span>
                  </h2>
                  <p className="text-[white] ps-[42px]">
                    G2’s 2021 Best Software Awards
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="absolute top-[0%] left-[60%] lg:left-[-50%] w-[220px] lg:w-[300px] h-full border">
              <img
                src={personWithHeadset}
                width={"100%"}
                alt="person-with-headset"
                className="transform rotate-[-10deg] xl:transform xl:rotate-[0deg]  "
              />
            </div> */}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            <div>
              <img src={findGreatWork} alt="findGreatWork" width={"100%"} />
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="p-[20px] h-full bg-[#1F57F3] flex flex-col justify-between  text-[white]">
              <div>
                <h5 className="mb-[20px] font-[600] text-[24px]">For Talent</h5>
                <h1 className="mb-[20px] leading-none font-[500] text-[64px]">
                  Find great <br /> work
                </h1>
                <p className="mb-[4em] leading-none text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  omnis illum qui enim ipsum reprehenderit! Veniam atque quaerat
                  illum assumenda.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] border-t border-[white]">
                  <div className="col-span-1">
                    <p className="text-white[">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem laborum assumenda sunt fugiat quos ea.
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-white[">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem laborum assumenda sunt fugiat quos ea.
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-white[">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem laborum assumenda sunt fugiat quos ea.
                    </p>
                  </div>
                </div>
                <button className="bg-[white] text-[#1F57F3] rounded-[7px] px-[15px] py-[6px] mt-[2em] ">
                  Find Opportunities
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="my-[5em]">
          <div className="mb-[4em]">
            <h1 className="text-[64px] font-bold  leading-none">
              Trusted by leading
              <br />
              brands and startups
            </h1>
          </div>
          <div>
            <div className="bg-[#13544e] text-[white] p-[20px] rounded-[10px] w-[fit-content]">
              <div>
                <img src="" alt="" />
                <p>
                  <q>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum saepe similique deleniti assumenda vitae.
                  </q>
                </p>
                <small>jessevia . abc</small>
              </div>
              <div>
                <p className="text-[18px]">Results</p>
                <div>
                  <h6 className="text-[20px]">11 days</h6>
                  <p className="text-[16px] text-[#C6C6C6]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, laboriosam?
                  </p>
                </div>
                <div>
                  <h6 className="text-[20px]">Nearly doubled</h6>
                  <p className="text-[16px] text-[#C6C6C6]">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ukraine */}
        {/* <section className="flex justify-between  p-[20px] bg-[#f9f9f9]  rounded-[10px]">
          <div>
            <h2 className="text-[34px] font-[500]">We support Ukraine</h2>
            <p className="text-[20px] text-[#676767] mb-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eos!
            </p>
            <button
              className="border border-[2px] border-[green] rounded-[8px]
                         px-[15px] py-[7px] text-[green]"
            >
              Learn more
            </button>
          </div>
          <div className="w-[200px] me-[25px]">
            <img src={ukraineHelp} width={"100%"} alt="" />
          </div>
        </section> */}

        {/* <section className="grid grid-cols-12 my-[4em]">
          <div className="col-span-4">
            <div>
              <h1>
                <a href="#" className="text-[#14a800]  font-[600] text-[32px]">
                  Top Skills
                </a>
              </h1>
              <h1>
                <a href="#" className="text-[#96968d] font-[600] text-[32px]">
                  Trending Skills
                </a>
              </h1>
              <h1>
                <a href="#" className="text-[#96968d] font-[600] text-[32px]">
                  Top Skills in US
                </a>
              </h1>
              <h1>
                <a href="#" className="text-[#96968d] font-[600] text-[32px]">
                  Project Catalog<sup className="text-[14px]">TM</sup>
                </a>
              </h1>
            </div>
          </div>
          <div className="col-span-4">
            <ol>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#14a800] hover:text-[#14a800]"
                >
                  Generative AI Specialists
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Data Entry Specialists
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Video Editors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Data Analyst
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Shopify Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Ruby on Rails Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Android Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Bookkeeper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Content Writer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Copywriter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Data Scientist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Front-End Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Game Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Graphic Designer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  iOS Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Java Developer
                </a>
              </li>
            </ol>
          </div>
          <div className="col-span-4">
            <ul>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  JavaScript Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Logo Designer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Mobile App Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  PHP Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Python Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Resume Writer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  SEO Expert
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Social Media Manager
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Software Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Software Engineer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Technical Writer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  UI Designer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  UX Designer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Virtual Assistant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  Web Designer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[24px] text-[#96968d] hover:text-[#14a800]"
                >
                  WordPress Developer
                </a>
              </li>
            </ul>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
