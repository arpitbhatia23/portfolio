import React from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
import {Link} from 'react-scroll'
const Contacts = () => {
  return (
    <div name='Contact' className='md:min-h-screen  max-w-screen-[100vw] max-h-screen bg-gradient-to-b from-black to-gray-600'>
      <div className='flex  items-center  justify-center text-white flex-col py-8 text-3xl'> Contact me</div>
      <div className=' flex flex-col justify-items-center items-center'>

<form action="https://api.web3forms.com/submit" method='Post' className=' text-white flex flex-col focus:outline-none justify-center items-center  '>
<input type="hidden" name="access_key" value="e632fd9c-4503-482a-bf46-9f3e5606d4fd"/>
<input type="text" name='name' placeholder=' enter your name ' className='bg-transparent border-2 rounded-md py-2 w-2/3 md:w-96' required />
<input type="tel" name='tel' placeholder=' enter your phone number  ' className='bg-transparent py-2 border-2 rounded-md my-3 w-2/3 md:w-96'minLength={10} maxLength={13}  required/>

<input type="email" name='email' placeholder=' enter your email  ' className='bg-transparent py-2 border-2 rounded-md my-3 w-2/3 md:w-96' required/>
<textarea name=" textarea" cols="50" rows="10" className=' bg-transparent py-2 border-2 rounded-md  w-2/3 md:w-96' placeholder='  enter your masseage'></textarea>
<button className='bg-indigo-700  py-2 rounded-xl w-16 my-2'> let's talk </button>

</form>

      </div>
      <div className='flex  justify-center my-16'>
  <Link to="Home" smooth duration={700}>
      <div className=' h-8 w-8 animate-bounce text-white bg-indigo-700 px-2 py-2 rounded-full my-12 '>  
      <AiOutlineArrowUp/>
    </div>
    </Link>  
</div>
</div>

  )
}

export default Contacts
