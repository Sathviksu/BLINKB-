import React from 'react'
import FlipImage2 from '../app/imagefipper/imagechanger2'
import { useRouter } from 'next/navigation'

const Page2 = () => {
  const router = useRouter()
  const createblink = () => {
    router.push("/add")
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="bg-[#35A29F] w-full md:w-[45%]">
          <FlipImage2 />
        </div>

        {/* RIGHT */}
        <div className="bg-[#35A29F] w-full md:w-[55%] flex flex-col items-center text-center md:text-left md:items-start px-6 md:px-12">
          <div className="text-[#071952] font-extrabold tracking-tight pt-16 md:pt-[200px] text-4xl md:text-6xl leading-tight">
            Create and customize <br /> your Blink bio in <br /> minutes
          </div>
          <div className="pt-6 pb-10 text-[16px] md:text-[20px] font-medium text-[#071952]">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast,
            events and more. It all comes together in a link in bio landing page designed to convert.
          </div>
          <button
            onClick={createblink}
            className="h-[50px] md:h-[60px] bg-[#071952] hover:bg-[#222d52] w-[160px] md:w-[180px] rounded-3xl mb-10"
          >
            Get started for free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page2
