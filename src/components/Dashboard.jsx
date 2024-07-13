import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import mongoodb from '../assets/mongo-db.png'
import express from '../assets/express-js.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import {AiOutlineRight
} from 'react-icons/ai'
import { Link } from 'react-scroll'
import background from "../assets/mern-stack.png"
import { AiOutlineArrowDown } from "react-icons/ai";
import { Tilt } from 'react-tilt'
function Dashboard() {
  const image=[
    {
    id:1,
    link:mongoodb,
    name:'Mongodb'
  },
  
  {
    id:2,
    link:express,
    name:'Express.js'

  },
   
  {
    id:3,
    link:react,
    name:'React.js'

  },
  {
    id:4,
    link:node,
    name:'Node.js'

  },
]
  return (
   
    <div name="Home" className=' md:min-h-screen max-h-screen  w-[100vw] bg-diagonal-gradient text-white '>   
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
<div className='flex flex-cols items-center ml-2 md:ml-0 '> 
<p className='text-center w-full text-xl'>

Hi my name is Aurpit i'm a frontend devloper 


    currently i love to work on web application using technologies like
   </p>
 
   </div>
  

   <div className=' flex  justify-center  items-center w-[100vw] gap-x-7 py-8'>
      {image.map(({id,link,name})=>(
        <Tilt key={id}>
        <div  className='text-center'>
          <img  src={link} alt="" className='w-12'  />
          <p className='text-white text-center'> {name}</p>
          </div>
          </Tilt>

    ))}
    
   

   </div >
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
