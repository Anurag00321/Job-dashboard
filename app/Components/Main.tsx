import React from 'react'
import Dot from '../assets/Dot.png'
import Image from 'next/image'
import location from '../assets/Location.png'
import coins from '../assets/Coins.png'
import figma from '../assets/image 1.png'
import illustrator from '../assets/image 2.png'
import xd from '../assets/image 6.png'
import Title from './Title'
import Requirements from './Requirements'
import Description from './Description'
import Company_Details from './Company_Details'

function Main() {
    return (
        <div className=' lg:w-3/4 border-r-2 border-[#E7E7E7]'>
           <Title/>
            <Requirements/>
            <Description/>
            <Company_Details/>
        </div>
    )
}

export default Main