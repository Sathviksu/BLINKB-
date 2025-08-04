import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const createblink = () => {
    router.push("/add");
  };

  return (
    <div>
      <div className='min-h-screen flex pt-[12vh] bg-[url("/background.jpg")] bg-cover bg-center justify-center items-center'>
        <div className="box w-[90%] max-w-[1200px] bg-white rounded-2xl shadow-[0_0_30px_#865DFF] p-6 md:p-10 flex flex-col justify-between gap-10">
          
          {/* Top section */}
          <div className="up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black text-sm md:text-base">
            <ul>
              <li className="text-xl font-semibold pb-3">Company</li>
              <li>The Linktree Blog</li>
              <li>Engineering Blog</li>
              <li>Marketplace</li>
              <li>What&apos;s New</li>
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Link in Bio</li>
              <li>Social Good</li>
              <li>Contact</li>
            </ul>

            <ul>
              <li className="text-xl font-semibold pb-3">Community</li>
              <li>Linktree for Enterprise</li>
              <li>2023 Creator Report</li>
              <li>2022 Creator Report</li>
              <li>Charities</li>
              <li>What&apos;s Trending</li>
              <li>Creator Profile Directory</li>
              <li>Explore Templates</li>
            </ul>

            <ul>
              <li className="text-xl font-semibold pb-3">Support</li>
              <li>Help Topics</li>
              <li>Getting Started</li>
              <li>Linktree Pro</li>
              <li>Features & How-Tos</li>
              <li>FAQs</li>
              <li>Report a Violation</li>
            </ul>

            <ul>
              <li className="text-xl font-semibold pb-3">Trust and legal</li>
              <li>Terms & Conditions</li>
              <li>Privacy Notice</li>
              <li>Cookie Notice</li>
              <li>Trust Center</li>
            </ul>
          </div>

          {/* Bottom section */}
          <div className="down flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
            <button className="text-[16px] hover:bg-[#232323] bg-black text-white h-[50px] w-[120px] rounded-3xl">
              Login
            </button>
            <button
              onClick={createblink}
              className="text-[16px] text-black hover:bg-[#a0a93b] bg-[#F7EC09] h-[50px] w-[180px] rounded-3xl"
            >
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
