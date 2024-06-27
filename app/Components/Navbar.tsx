'use client'
import Image from 'next/image'
import React from 'react'
import profile from '../assets/Atlassian logo.svg'
import bell from '../assets/bell.svg'
import down from '../assets/down.svg'
import suitcase from '../assets/jobs.svg'
import payments from '../assets/payments.svg'
import messages from '../assets/messages.svg'
import { useState } from 'react'


function Navbar() {

  return (
    <div className='bg-white h-20 w-screen flex justify-between items-center px-6 '>
      <div className='text-[#DC4A2D] bg-[#E7E7E7] px-4 py-3 font-bold'>Logo</div>
      <div className="lg:flex hidden items-center text-[#B0B0B0] gap-10 justify-around bg-white border border-[#D0D5DD] rounded-full p-2 shadow-sm">

        <button

          className="flex items-center space-x-2 py-2 px-4 rounded-full transition-colors outline-none duration-200 bg-[#DC4A2D] text-white">
          <Image src={suitcase} alt='jobs' />

          <span>Jobs</span>
        </button>
        <button

          className="flex items-center space-x-2 py-2 px-4 rounded-full transition-colors outline-none duration-200">
            <div className='relative'>
          <Image src={messages} alt='messages' />
          <span className="absolute top-0 right-0 inline-block w-1.5 h-1.5 bg-red-600 rounded-full"></span>
          </div>
          <span>Messages</span>
        </button>
        <button

          className="flex items-center space-x-2 py-2 px-4 rounded-full transition-colors outline-none duration-200">
          <Image src={payments} alt='payments' />

          <span>Payments</span>
        </button>

      </div>
      <div className='flex gap-4'>
        <button className='relative hover:bg-gray-200 p-2 rounded-full'>
          <Image src={bell} alt='bell' width={20} height={20} />
          <span className="absolute top-2.5 right-2 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <button className='flex items-center gap-2 hover:bg-gray-200 py-2 px-3 rounded-full'>
          <Image src={profile} alt='profile' className='rounded-full' width={30} height={30} />
          <Image src={down} alt='down' />
        </button>

      </div>
    </div>
  )
}

export default Navbar