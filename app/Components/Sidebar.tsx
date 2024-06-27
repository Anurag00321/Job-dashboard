import React from 'react'
import Image from 'next/image'
import bin from '../assets/bin.svg'
import pen from '../assets/pen.svg'
import applicants from '../assets/Icon.svg'
import matches from '../assets/matches.svg'
import messages from '../assets/messages.svg'
import eyes from '../assets/views.svg'

function Sidebar() {
  return (
    <div className='shadow-xl shadow-[#E7E7E7]  bg-[#fcfcfc] lg:w-1/4'>
      <div className='flex pt-4'>
        <div className='flex m-auto gap-4'>
        <button className='bg-[#FEF4F2] text-[#DC4A2D] border border-[#DC4A2D] rounded-md p-2 gap-2 flex items-center'><Image src={bin} alt='delete' /><p>Delete job</p></button>
        <button className='bg-[#DC4A2D] text-white border border-[#FED3CA] rounded-md py-2 px-4 flex gap-2 items-center'><Image src={pen} alt='pen icon' /><p>Edit job</p></button>
        </div>
        </div>
      <div className='p-8 flex flex-col gap-4'>
        <div className='flex items-center justify-between border-b-2 border-[#E7E7E7] pb-6'>
          <div className='flex gap-2 text-black'> <Image src={applicants} alt='applicants' />
            <p className='text-[#4F4F4F] text-sm font-medium'>Applicants</p></div>
          <span className='text-[#3D3D3D] text-lg font-semibold'>400</span>
        </div>
        <div className='flex items-center justify-between border-b-2 border-[#E7E7E7] pb-6'>
          <div className='flex gap-2'> <Image src={matches} alt='matches' />
            <p className='text-[#4F4F4F] text-sm font-medium'>Matches</p></div>
          <span className='text-[#3D3D3D] text-lg font-semibold'>100</span>
        </div>
        <div className='flex items-center justify-between border-b-2 border-[#E7E7E7] pb-6'>
          <div className='flex gap-2'> <Image src={messages} alt='messages' />
            <p className='text-[#4F4F4F] text-sm font-medium'>Messages</p></div>
          <span className='text-[#3D3D3D] text-lg font-semibold'>147</span>
        </div>
        <div className='flex items-center justify-between pb-6'>
          <div className='flex gap-2'> <Image src={eyes} alt='views' />
            <p className='text-[#4F4F4F] text-sm font-medium'>Views</p></div>
          <span className='text-[#3D3D3D] text-lg font-semibold'>800</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar