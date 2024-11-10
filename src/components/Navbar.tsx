import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-svw flex justify-center mt-4 cursor-pointer absolute font-semibold'>
      <ul className='flex justify-between w-6/12 tracking-wide bg-slate-800 text-2xl text-green-400 px-8 py-2 rounded-md drop-shadow-md hover:drop-shadow-lg'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
