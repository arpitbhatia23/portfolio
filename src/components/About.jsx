import React from 'react'
import profile from '../assets/profile.jpg'

function About() {
  return (
    <div name="About" className=' flex justify-center items-center max-h-screen md:min-h-screen w-[100vw]  text-white bg-diagonal-gradient'>   

    <div className='flex flex-col md:flex-row  w-full items-center justify-center gap-x-[15px] h-full pb-4'> 
      
      <img src={profile} alt='' className='w-60 md:w-80 ml-0 md:ml-6  mt-4 rounded-full md:rounded-sm  animate-neon'/>
<p className='ml-1 md:ml-0'>
<p className='text-3xl  text-center md:text-center'>About</p>
<br/>

I am a passionate MERN stack developer with experience in building user-friendly and visually appealing applications.<br/>
 My expertise lies in creating seamless user experiences and crafting elegant interfaces using the MERN stack.

Skills:
<ol className="list-disc list-inside">
 <li>Proficient in HTML, CSS, and JavaScript</li>
<li>Experience with frontend frameworks such as React.js</li>
<li>Strong understanding of responsive design principles</li>
<li>Familiarity with version control systems like Git</li>
<li>Ability to collaborate effectively in cross-functional teams</li>
<li>Experience with backend development using Node.js and Express.js</li>
<li>Proficient in working with MongoDB for database management</li>
</ol>
</p>
    </div>
    </div>
  )
}

export default About
