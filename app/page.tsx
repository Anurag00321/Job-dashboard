// pages/job/[id].js
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Components/Navbar'
import Tabs from './Components/Tabs'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'

export default function JobPosting() {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Tabs/>
      <div className='lg:flex'>
        <Main/>
        <Sidebar/>
      </div>
    </div>
  )
}