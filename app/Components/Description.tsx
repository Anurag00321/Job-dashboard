import React from 'react'

function Description() {
  return (
    <div className='lg:px-16 p-8 border-b border-[#E7E7E7]'>
      <h2 className='text-[#888888] mb-2'>About the job</h2>
      <span className='text-[#3D3D3D] font-medium text-sm'>
        <ul>
          <li>1. Handle the UI/UX research design</li>
          <li>2. Work on researching on latest web applications designs & trends</li>
          <li>3. Work on conceptualizing and visualizing</li>
          <li>4. Work on creating graphics content and other graphic related works</li>
        </ul>



        <span className='my-2'>Benefits:
          <li className='ml-2'>Health insurance</li>
          <li className='ml-2'>Provident Fund</li>
        </span>



        <span className='my-1'>
          Schedule:
          <li className='ml-2'>Day shift</li>
        </span>
        <span className='my-1'>
          Supplemental pay types:
          <li className='ml-2'>Performance bonus</li>
          <li className='ml-2'>Yearly bonus</li>
        </span>
        Work Location: In person</span>
    </div>
  )
}

export default Description