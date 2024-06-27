import React from 'react'
import Image from 'next/image'
import profile from '../assets/Atlassian logo.svg'

function Company_Details() {
    return (
        <div className='p-8 lg:px-16 border-b border-[#E7E7E7]'>

            <div className='flex items-center gap-2 mb-4'>
                <Image src={profile} alt='company profile' />
                <span className='font-medium text-lg'>Atlassian</span>
            </div>

            <div className='flex gap-40'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#6E6D6D] text-sm font-medium '>Company Size</p>
                        <span className='font-medium text-[#3D3D3D] text-base'>1k-2k Employees</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#6E6D6D] text-sm font-medium '>Sector</p>
                        <span className='font-medium text-[#3D3D3D] text-base'>Information Technology, Infrastructure</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#6E6D6D] text-sm font-medium '>Founded in</p>
                        <span className='font-medium text-[#3D3D3D] text-base'>2019</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>

                    <div className='flex flex-col gap-2'>
                        <p className='text-[#6E6D6D] text-sm font-medium '>Type</p>
                        <span className='font-medium text-[#3D3D3D] text-base'>Private</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#6E6D6D] text-sm font-medium '>Funding</p>
                        <span className='font-medium text-[#3D3D3D] text-base'>Bootstrapped</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#6E6D6D] text-sm font-medium '>Founded By</p>
                        <span className='font-medium text-[#3D3D3D] text-base'>Scott Farquhar, Mike Cannon-Brookes</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Company_Details