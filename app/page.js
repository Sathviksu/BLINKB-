"use client";
import React, { useState } from "react";
import FlipImage from "./imagefipper/imagechanger";
import Page2 from "@/components/page2";
import Page3 from "@/components/page3";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const Page = () => {
  const [text, settext] = useState("");
  const router = useRouter();

  const createblink = async () => {
    router.push(`/add?handle=${text}`);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-[#254f1a] min-h-screen flex flex-col md:flex-row pt-30 md:pt-0">
        {/* LEFT */}
        <div className="md:w-1/2 w-full flex flex-col items-start justify-center p-5">
          <div className="text-[#F0FF42] text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
            Seamless Sharing,<br /> Just a Blink Away.
          </div>
          <div className="text-[#F0FF42] text-base md:text-2xl font-semibold mt-5">
            Join people using Linktree for their link in bio. One link to help
            you share everything you create, curate and sell from your Instagram,
            TikTok, Twitter, YouTube and other social media profiles.
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10 w-full max-w-md">
            <input
              value={text}
              onChange={(e) => settext(e.target.value)}
              type="text"
              placeholder="Enter your handle"
className="bg-[#d9f1fa] pl-4 h-[60px] sm:h-[50px] w-[100%] sm:w-auto rounded-2xl text-[#232323]"            />
            <button
              onClick={() => createblink()}
              className="h-[50px] bg-[#F0FF42] text-[#254f1a] text-[16px] sm:text-[18px] font-semibold rounded-2xl sm:w-[200px] w-full hover:bg-[#d3dc6f] hover:shadow-[0_0_30px_#F0FF42]"
            >
              Claim Your Blink
            </button>
          </div>
        </div>

        {/* RIGHT – hidden on mobile */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-5">
          <FlipImage />
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  );
};

export default Page;
