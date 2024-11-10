import React from 'react'
import Link from 'next/link'

const  Contact = () => {
  return (
    <>
        <div className='bg-slate-900 w-svw h-svh text-white'>

<form className='mt-36 absolute ml-24 flex justify-between gap-16'>

<div>
  <input type="text" placeholder='Name' className='border-2 mb-8 px-2 py-4 border-green-400 text-2xl text-green-400 bg-transparent rounded-md ' />
  <br />
  <input type="text" placeholder='Email' className='border-2 mb-8 px-2 py-4 border-green-400 text-2xl text-green-400 bg-transparent rounded-md ' />
  <br />
  <input type="text" placeholder='Phone' className='border-2 mb-8 px-2 py-4 border-green-400 text-2xl text-green-400 bg-transparent rounded-md ' />
</div>

<div>
<ul className='text-2xl font-semibold text-green-400 pionter tracking-wide'>
  <li className='mb-8'> <Link href="https://github.com/Mustafa475689"> Click Here For Github</Link></li>
  <li className='mb-8'> <Link href="https://www.facebook.com/profile.php?id=100094524916260">Click Here For Facebook</Link></li>
  <li> <Link href="https://www.linkedin.com/in/mustafa-khan-7b4562283/">Click Here For Linkedin</Link></li>
</ul>
</div>

  <div>
<textarea name="massage" className='w-96 h-96 text-2xl bg-transparent text-green-400 px-4 border-2 border-green-400 rounded-md'>Feel Free to massage me </textarea>
<br />
<button className='text-2xl bg-green-400 px-4 py-2 rounded-md'>Send</button>
</div>
</form>



</div>

    </>
  )
}

export default Contact
