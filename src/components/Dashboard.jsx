import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import {AiOutlineRight
} from 'react-icons/ai'
import { Link } from 'react-scroll'

import { AiOutlineArrowDown } from "react-icons/ai";
function Dashboard() {
  const image=[
    {
    id:1,
    link:html,
  },
  
  {
    id:2,
    link:css,
  },
   {
    id:3,
    link:tailwind,
  },
  {
    id:4,
    link:bootstrap,
  },
  {
    id:5,
    link:js,
  },
  {
    id:6,
    link:react,
  },
]
  return (
    <div name="Home" className=' md:min-h-screen max-h-screen w-[100vw] bg-gradient-to-b from-black to-gray-700 text-white '>   
    <div className='  min-w-[100vw ]sm:max-w-screen-lg mx-auto flex flex-col items-center  justify-end md:justify-end md:items-center   h-60   px-3  text-4xl space-x-2 ' >
      

    <p>I'm a </p> 
         <TypeAnimation 
   sequence={[
    '  Frontend Devloper',3000,
    '  Web Designer',3000,
   ]}
   wrapper='div'
   speed={50}
   repeat={Infinity}
   cursor={true}/>
   <br/>
<br/>

</div>
<div className='flex flex-cols place-content-center ml-2 md:ml-0 '> 
<p>

Hi my name is Aurpit i'm a frontend devloper 


    currently i love to work on web application using technologies like
   </p>
 
   </div>
  

   <div className=' flex  justify-center  items-center w-[100vw] gap-x-10 py-8'>
      {image.map(({id,link})=>(
          <img key={id} src={link} alt="" className='w-6 sm:w-20'  />

    ))}
    
   

   </div>
<div className='w-full  inline-flex  justify-center mt-5'>
   <button className='bg-fuchsia-700 rounded-lg px-6 py-2 hover:bg-green-600 hover:scale-95 outline outline-offset-2 outline-1 hover:outline-red-600 '> <a href="Aurpit.docx" download='Aurpit.docx'>resume <span >  
      {/* <AiOutlineRight/>  */}
</span> </a>  
  
   </button></div>
  <div className='flex py-10  items-center justify-center'>
  <Link to='About' smooth duration={500}>  

    <button className=' mt-10 md:mt-[120px] animate-bounce bg-indigo-600 py-4 px-4 rounded-full'>
             <AiOutlineArrowDown /> 
</button>  
</Link>

</div>
   </div>


  )
}

export default Dashboard
