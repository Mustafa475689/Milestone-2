import React from 'react'
import Image from 'next/image'

import intro from "../Assests/intro.svg"

import {
  FaHtml5,
  FaCss3Alt, } from "react-icons/fa";
  import {
 DiJavascript1,
 DiReact,
 DiGit,
} from "react-icons/di";
import {
 SiNextdotjs,
 SiTypescript,
 SiTailwindcss
} from "react-icons/si";

const About = () => {
  return (
    <>
        <div className='bg-slate-900 w-svw h-svh text-white'>

<div className='w-4/5 mt-36 ml-16 flex justify-between absolute'>

<div className='flex flex-col justify-center'>
  <h1 className='text-4xl font-semibold tracking-wide mb-8'>Know Who <span className='text-green-400'>I'M</span></h1>
  <ul className='text-xl tracking-wide font-semibold'>
    <li className='mb-2'>
    Hi Everyone, I am <span  className='text-green-400'> Muhammad Mustafa </span> from <span  className='text-green-400'> Karachi, Pakistan.</span>
    </li>

    <li className='mb-2'>
    I am currently learning <span className='text-green-400'>Next JS</span> from <span className='text-green-400'> Governor initiative.</span>
    </li>

    <li className='mb-8'>
    I have completed Intermediate in pre-engenering at Karachi.
    </li>
</ul>
</div>

<Image src={intro} alt='Intro' className='w-1/3'/>

</div>
</div>

<div className='bg-slate-900 w-svw h-svh text-white'>
  <div className='px-96 '> 
  <h2 className='text-4xl self-center font-semibold tracking-wide'>Professional <span className='text-green-400'>Skillset</span> </h2>
  </div>

  <div className='flex w-4/5 justify-between flex-wrap text-9xl px-36 gap-8 mt-16'>
  
    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    <FaHtml5 />
    </div>

    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    <FaCss3Alt />
    </div>

    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    < DiJavascript1 />
    </div>

    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    <DiReact />
    </div>


    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    <DiGit />
    </div>

    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    < SiNextdotjs />
    </div>

    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    <SiTypescript />
    </div>

    
    <div className='rounded-md border-2 border-green-400 px-4 py-4'>
    <SiTailwindcss />
    </div>
    

  </div>

</div>
    </>
    
  )
}

export default About
