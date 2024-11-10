import React from 'react'
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
  
const Footer = () => {
  return (
    <div className='bg-slate-800 w-svw flex justify-between text-green-400 px-24 font-semibold text-xl tracking-wide py-4'>
      <p>Developed by Mustafa Khan</p>
      <p>Copyright © 2024 MK</p>
        <ul className='flex justify-between gap-8'>
            <li> <Link href="https://www.facebook.com/profile.php?id=100094524916260">
            <FaFacebook />
            </Link> </li>

            <li> <Link href="https://www.linkedin.com/in/mustafa-khan-7b4562283/">
            <FaLinkedinIn />
            </Link> </li>

            <li> <Link href="https://github.com/Mustafa475689">
            <AiFillGithub />
            </Link> </li>
        </ul>
    </div>
  )
}

export default Footer
