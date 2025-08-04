"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const showNavbar = ["/", "/add", "/marketplace", "/discover", "/pricing", "/learn"].includes(pathname);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {showNavbar && (
        <div className="fixed top-11 w-screen z-10 flex justify-center items-center">
          <nav className="h-[80px] text-black w-[85vw] flex justify-between pl-2.5 pr-3 rounded-[35px] bg-[#d9f1fa]">
            {/* Left section - Hamburger + Logo + Links */}
            <div className="fo flex justify-center items-center gap-2">
              {/* Hamburger button for mobile */}
              <button className="md:hidden text-4xl" onClick={() => setOpen(true)}>
                <HiMenuAlt3 />
              </button>
              <img src="/logo1.png" className="h-[60px]" alt="logo" />

              {/* Desktop links */}
              <ul className="hidden md:flex justify-around text-[20px] text-[#242323] items-center gap-3 h-full">
                <Link href="/"><li className="hover:bg-blue-200 flex items-center justify-center h-[40px] w-[100px] rounded-2xl">Home</li></Link>
                <Link href="/marketplace"><li className="hover:bg-blue-200 flex items-center justify-center h-[40px] w-[120px] rounded-2xl">MarketPlace</li></Link>
                <Link href="/discover"><li className="hover:bg-blue-200 flex items-center justify-center h-[40px] w-[100px] rounded-2xl">Discover</li></Link>
                <Link href="/pricing"><li className="hover:bg-blue-200 flex items-center justify-center h-[40px] w-[80px] rounded-2xl">Pricing</li></Link>
                <Link href="/learn"><li className="hover:bg-blue-200 flex items-center justify-center h-[40px] w-[80px] rounded-2xl">Learn</li></Link>
              </ul>
            </div>

            {/* Desktop login/logout */}
            <div className="hidden md:flex justify-around items-center gap-2.5">
              {user ? (
                <>
                  <span className="text-black text-lg font-semibold">Welcome, {user.name}</span>
                  <button onClick={handleLogout} className="text-2xl hover:bg-[#232323] bg-black text-white h-[55px] w-[120px] rounded-4xl">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login"><button className="text-2xl hover:bg-[#232323] bg-black text-white h-[55px] w-[120px] rounded-4xl">Login</button></Link>
                  <Link href="/signup"><button className="text-2xl hover:bg-[#232323] bg-black text-white h-[55px] w-[130px] rounded-4xl">Sign Up</button></Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
          <div className="fixed top-0 left-0 h-full bg-[#d9f1fa] w-[70vw] max-w-[300px] z-50 transform translate-x-0 transition-transform duration-300">
            <div className="p-4 flex justify-between items-center">
              <img src="/logo1.png" className="h-[50px]" alt="logo" />
              <button onClick={() => setOpen(false)} className="text-3xl">
                <HiX />
              </button>
            </div>
            
            {/* Mobile Links */}
            <ul className="flex flex-col gap-3 px-4 text-[20px] text-[#242323]">
              <Link href="/" onClick={() => setOpen(false)}><li className="hover:bg-blue-200 p-3 rounded-xl">Home</li></Link>
              <Link href="/marketplace" onClick={() => setOpen(false)}><li className="hover:bg-blue-200 p-3 rounded-xl">MarketPlace</li></Link>
              <Link href="/discover" onClick={() => setOpen(false)}><li className="hover:bg-blue-200 p-3 rounded-xl">Discover</li></Link>
              <Link href="/pricing" onClick={() => setOpen(false)}><li className="hover:bg-blue-200 p-3 rounded-xl">Pricing</li></Link>
              <Link href="/learn" onClick={() => setOpen(false)}><li className="hover:bg-blue-200 p-3 rounded-xl">Learn</li></Link>
            </ul>

            <div className="mt-auto px-4 py-6 text-[#242323]">
              {user ? (
                <>
                  <p className="font-bold text-lg mb-2">Welcome, {user.name}</p>
                  <button onClick={() => { handleLogout(); setOpen(false); }} className="w-full text-2xl hover:bg-[#232323] bg-black text-white py-3 rounded-xl">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)}><button className="w-full text-2xl hover:bg-[#232323] bg-black text-white py-3 rounded-xl mb-3">Login</button></Link>
                  <Link href="/signup" onClick={() => setOpen(false)}><button className="w-full text-2xl hover:bg-[#232323] bg-black text-white py-3 rounded-xl">Sign Up</button></Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
