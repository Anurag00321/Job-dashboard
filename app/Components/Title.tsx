import React from 'react'
import Image from 'next/image'
import Dot from '../assets/Dot.svg'
import location from '../assets/marker-pin.svg'
import coins from '../assets/coinstack.svg'

function Title() {
  return (
    <div className=' border-b border-gray-200 pb-6'>
                <div className=' flex gap-3 items-center p-8 lg:px-16'>
                    <h1 className='text-[#3D3D3D] font-semibold text-3xl'>Senior Product Designer</h1>

                    <span className='border-[#D1D1D1] rounded-full w-1 h-1 border'></span>
                    <span className='font-medium text-sm text-[#888888]'>posted 2 days ago</span>
                    <span className='bg-green-100 relative px-3 rounded-full border border-green-400 text-green-700'><Image src={Dot} alt='dot' className='absolute w-1.5 h-1.5 top-2.5 left-1.5 inline-block' />Open</span>
                </div>
                <div className='flex gap-5 text-xl font-medium text-[#888888] px-8 lg:px-16'>
                    <span className='flex gap-3 '><Image src={location} alt='location' />Delaware, USA</span>
                    <span className='border-[#D1D1D1] rounded-full w-1 h-1 border mt-2'></span>
                    <span className='flex gap-2'><Image src={coins} alt='coins' />$300k-$400k</span>
                </div>
            </div>
  )
}

export default Title