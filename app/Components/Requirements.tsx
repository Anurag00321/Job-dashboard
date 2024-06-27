import React from 'react'
import Image from 'next/image'
import figma from '../assets/figma.svg'
import illustrator from '../assets/illustrator.svg'
import xd from '../assets/xd.svg'

function Requirements() {
  return (
    <div className='flex flex-wrap p-8 lg:px-16 border-b border-[#E7E7E7] justify-normal gap-24'>
            <div className='flex flex-col justify-start items-start '>
                <h1 className='text-[#888888] font-medium'>Skills Required</h1>
                <span className='flex gap-2 items-center  font-medium rounded-lg border border-[#D0D5DD] w-fit px-1 py-0.5 mt-2 text-xs'><Image src={figma} alt='figma' />Figma</span>
                <span className='flex gap-2 items-center  font-medium rounded-lg border border-[#D0D5DD] w-fit px-1 py-0.5 mt-3 text-xs'><Image src={illustrator} alt='illustrator' />Adobe Illustrator</span>
                <span className='flex gap-2 items-center font-medium rounded-lg border border-[#D0D5DD] w-fit px-1 py-0.5 mt-3 text-xs'><Image src={xd} alt='xd'/>Adobe XD</span>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 '>
                <h1 className='text-[#888888] font-medium'>Preferred Language</h1>
                <span className=' font-semibold  text-base'>English</span>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 '>
                <h1 className='text-[#888888] font-medium'>Type</h1>
                <span className='font-semibold text-base'>Full time</span>
            </div>
            <div className='flex flex-col justify-start items-start gap-2 '>
                <h1 className='text-[#888888] font-medium'>Years of Experience</h1>
                <span className=' font-semibold text-base'>3+ Years of Experience</span>
            </div>
            </div>
  )
}

export default Requirements