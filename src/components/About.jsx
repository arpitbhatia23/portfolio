import React from 'react'
import profile from '../assets/profile.jpg'

function About() {
  return (
    <div name="About" className=' flex justify-center items-center max-h-screen md:min-h-screen w-[100vw] bg-gradient-to-b from-black to-gray-700 text-white '>   

    <div className='flex flex-col md:flex-row  w-full items-center justify-center gap-x-[15px] h-full pb-4'> 
      
      <img src={profile} alt='' className='w-60 md:w-80 ml-0 md:ml-6  rounded-full md:rounded-[40px] py-4'/>

<p className='ml-1 md:ml-0'><p className='text-3xl'>About</p><br/>

I am a passionate frontend developer with   experience of building user-friendly and visually appealing applications. My expertise lies in frontend development, where I specialize in creating seamless user experiences and crafting elegant interfaces.

Skills
Proficient in HTML, CSS, and JavaScript
Experience with frontend frameworks such as React.js 
Strong understanding of responsive design principles
Knowledgeable in UX/UI design concepts and best practices
Familiarity with version control systems like Git
Ability to collaborate effectively in cross-functional teams</p>
    </div>
    </div>
  )
}

export default About
