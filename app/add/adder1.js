"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const Adder = () => {
  const searchParams = useSearchParams();
  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get('handle') || "");
  const [picture, setpicture] = useState("");
  const [desc, setdesc] = useState("");

  const addlink = (index, value, field) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setlinks(newLinks);
  };

  const addNewLink = () => {
    setlinks([...links, { link: "", linktext: "" }]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.info('Link copied!'))
      .catch(() => toast.error('Failed to copy link'));
  };

  const handleHandleChange = (e) => {
    const newHandle = e.target.value.replace(/\s/g, '');
    sethandle(newHandle);
  };

  const submitlink = async () => {
    if (handle.includes(' ')) {
      toast.error('Handle cannot contain spaces');
      return;
    }
    if (handle.length < 3 || picture.length < 5 || links.some(link => link.link.length < 5 || link.linktext.length < 3)) {
      toast.error('Please ensure all fields meet the minimum length requirements.');
      return;
    }

    const raw = JSON.stringify({ handle, links, picture, desc });
    const r = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw
    });
    const result = await r.json();
    if (result.success) {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const blinkLink = `${baseUrl}/${handle}`;
      toast.success(
        <div className="min-w-[400px] w-full">
          <div className="text-xl font-semibold mb-3">Link added successfully! 🎉</div>
          <div className="mt-2 p-4 bg-gray-800 rounded-lg flex justify-between items-center gap-4">
            <span className="text-base text-gray-300 break-all">{blinkLink}</span>
            <button onClick={() => copyToClipboard(blinkLink)} className="px-4 py-2 text-sm bg-blue-500 rounded-lg hover:bg-blue-600 whitespace-nowrap">Copy</button>
          </div>
        </div>,
        { position: "top-center", autoClose: 15000, theme: "dark", style: { maxWidth: "600px", width: "70vw" } }
      );
    } else {
      toast.error(result.message || 'Something went wrong!');
    }
    sethandle(""); setpicture(""); setdesc(""); setlinks([{ link: "", linktext: "" }]);
  };

  return (
    <div>
      <div className='bg-[url("/pagebg.jpg")] flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover'>
        
        {/* LEFT: FORM SECTION */}
<div className='w-full md:w-[55%] px-6 md:px-0 flex flex-col gap-4 min-h-screen pt-34 md:pt-[140px] md:ml-[200px]'>
          <div className='text-2xl font-bold text-[#f6f684]'>Create your Blink</div>
          <h1 className='text-[#FFEB00]'>Step 1: Claim your handle</h1>
          <input 
            value={handle}
            onChange={handleHandleChange}
            type='text'
            placeholder='Choose a handle'
            className='bg-[#d9f1fa] w-full max-w-xs md:max-w-[250px] pl-4 h-[45px] rounded-2xl text-[#232323]'
          />
          
          <h1 className='text-[#FFEB00]'>Step 2: Add your links</h1>
          {links.map((link, index) => (
            <div className='flex flex-col sm:flex-row gap-3' key={index}>
              <input
                value={link.linktext}
                onChange={(e) => addlink(index, e.target.value, 'linktext')}
                type='text'
                placeholder='Enter link Text'
                className='bg-[#d9f1fa] pl-4 h-[45px] w-full max-w-xs md:max-w-[250px] rounded-2xl text-[#232323]'
              />
              <input
                value={link.link}
                onChange={(e) => addlink(index, e.target.value, 'link')}
                type='text'
                placeholder='Enter link'
                className='bg-[#d9f1fa] pl-4 h-[45px] w-full max-w-xs md:max-w-[250px] rounded-2xl text-[#232323]'
              />
            </div>
          ))}
          
          <button
            onClick={addNewLink}
            className='h-[45px] mt-2 bg-[#57ee75] text-[#16423C] text-[18px] font-semibold rounded-2xl w-full max-w-[200px] hover:bg-[#73EC8B]'
          >
            Add Link
          </button>

          <h1 className='text-[#FFEB00]'>Step 3: Add picture and Description</h1>
          <input value={picture} onChange={(e) => setpicture(e.target.value)} type='text' placeholder='Enter link to your picture'
            className='bg-[#d9f1fa] w-full max-w-md pl-4 h-[45px] rounded-2xl text-[#232323]' />
          <input value={desc} onChange={(e) => setdesc(e.target.value)} type='text' placeholder='Enter your description'
            className='bg-[#d9f1fa] w-full max-w-md pl-4 h-[45px] rounded-2xl text-[#232323]' />

          <button disabled={!handle || !picture} onClick={submitlink}
            className='disabled:bg-[#436149] h-[50px] mt-3 bg-[#57ee75] text-[#16423C] text-[18px] font-semibold rounded-2xl w-full max-w-[300px] hover:bg-[#73EC8B] mb-7'>
            Create Blink
          </button>
        </div>

        {/* RIGHT: IMAGE (hidden on mobile) */}
        <div className='hidden md:flex w-[45%] min-h-screen items-center justify-center'>
          <img src='/image7.png' className='h-[550px] rounded-3xl mt-[130px] floating fixed' />
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Adder;
