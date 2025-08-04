import React from 'react'
import FlipImage3 from '../app/imagefipper/imagechanger3'
import { useRouter } from 'next/navigation'

const Page3 = () => {
  const router = useRouter()
  const createblink = () => {
    router.push("/add")
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* RIGHT (text) */}
        <div className="bg-[#845EC2] w-full md:w-[55%] px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-[#071952] font-extrabold tracking-tight pt-16 md:pt-[200px] text-4xl md:text-6xl leading-tight">
            Share your Blink <br />
            from your Instagram, <br />
            TikTok, Twitter and <br />
            other bios
          </div>
          <div className="pt-6 pb-10 text-[16px] md:text-[20px] font-medium text-[#071952] max-w-xl">
            Add your unique Blink URL to all the platforms and places you find your audience.
            Then use your QR code to drive your offline traffic online.
          </div>
          <button
            onClick={createblink}
            className="h-[50px] md:h-[60px] bg-[#071952] hover:bg-[#26326a] w-[160px] md:w-[180px] rounded-3xl mb-10"
          >
            Get started for free
          </button>
        </div>

        {/* LEFT (image) */}
        <div className="bg-[#845EC2] w-full md:w-[45%]">
          <FlipImage3 />
        </div>
      </div>
    </div>
  )
}

export default Page3
