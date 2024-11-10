import React, { Profiler } from 'react'
import Image from 'next/image'

import profile from "./Assests/Profile.svg"

import intro from "./Assests/intro.svg"


const Page = () => {
  return (
    <>
      
      <div className='bg-slate-900 w-svw h-svh text-white'>

        <div className='w-4/5 mt-36 ml-16 flex justify-between absolute'>

          <Image src={profile} alt="Profile" className='w-1/3' />   

<div className='flex flex-col justify-center'>
          <h1 className='text-4xl font-semibold tracking-wide mb-8'>Hi There!</h1>
          <h2 className='text-4xl font-semibold tracking-wide mb-8'>I'M <span className='text-green-400'>Mustafa Khan</span></h2>  
          <h3 className='text-4xl font-semibold tracking-wide text-green-400'>Frontend Developer</h3>
</div>
        </div>
      </div>


      <div>
        <div className='bg-slate-900 w-svw h-svh text-white'>

<div className='w-4/5 mt-36 ml-16 flex justify-between absolute'>

<div className='flex flex-col justify-center'>
  <h1 className='text-4xl font-semibold tracking-wide mb-8'>LET ME <span className='text-green-400'>INTRODUCE</span> MYSELF</h1>
  <ul className='text-xl tracking-wide font-semibold'>
    <li className='mb-8'>
      I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
    </li>

    <li className='mb-8'>
    I am fluent in classics like <span className='text-green-400'>Javascript and React js.</span>
    </li>

    <li className='mb-8'>
    My field of Interest's are building new <span className='text-green-400'> Web Technologies and Products.</span>
    </li>

    <li className='mb-8'>
    Whenever possible, I also apply my passion for developing products with <span className='text-green-400'> Modern Javascript Library and Frameworks </span> like <span className='text-green-400'> React.js/Next js. </span>
    </li>
</ul>
</div>

<Image src={intro} alt='Intro' className='w-1/3'/>

</div>
</div>
    </div>
    </>
  )
}

export default Page
