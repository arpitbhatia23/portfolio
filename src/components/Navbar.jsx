import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'
function Navbar() {
  const[nav,setnav]=useState(false)
  const handleNav=()=>{setnav(!nav)}
  const navLink = [{
    id:1,
    link:'Home',
  },
  {
    id:2,
    link:'About',

  },
  {
    id:3,
    link:'project',
  },

    {
      id:4,
      link:'skills',
  
    },
{
  id:5,
  link:"certificates"
},
  
  {
    id:6,
    link:'Contact',

  },
]


  
  
  return (
   
  
<>
<div className='fixed bg-indigo-950 text-white h-16  w-[100vw]     flex justify-between items-center z-[1000] '>
  <h1 className='text-xl font- primary-color ml-4 font-cursive '> Aurpit</h1>
  <ul className="hidden md:flex text-xl font-cursive  cursor-pointer">
  {navLink.map(({id,link})=>(
  <li key={id}className='p-2 rounded-lg px-10 hover:scale-95'> <Link to={link} smooth duration={100}>{link}</Link> </li>

  ))
    }
  </ul>
    <div onClick={handleNav} className='block  md:hidden  absolute right-4  top-3.5   '>
    {nav ? <AiOutlineClose size={30} />:<AiOutlineMenu size={30}/>}
  </div>
<div className={nav ? ' flex md:hidden  absolute font-cursive   right-0 top-16 min-h-[100vh] backdrop-blur-sm bg-diagonal-gradient ease-in-out duration-1000':'fixed right-[-200%]'}>
  <ul className=" p-8 text-xl">
  {navLink.map(({id,link})=>(
  <li key={id}className='py-8 '> <Link to={link} smooth duration={500}>{link}</Link></li>

  ))
    }
  </ul>
</div>
</div>


</>
  )
}

export default Navbar
