import React from 'react'
import profile from '../assets/profile.jpg'
import reactweather from'../assets/reactWeather.png'
import weather from'../assets/weather.png'
import currency from'../assets/currency.png'
import textutilies from'../assets/textutilies.png'
import image from "../assets/image.png"
import { Tilt } from 'react-tilt'

const Projects = () => {
  const projects=[
    {
    id:1,
     link:"https://weather-forecating.netlify.app/",
    image:weather,
    projectname:'weather forecasting',
  },
  {
    id:2, 
    link:'https://react-wea-ther-fore-cast.netlify.app/',
    image:reactweather,
    projectname:'react weather ',

  }, {
    id:3, 
    link:"https://transcendent-liger-ca4dd6.netlify.app",
    image:currency,
    projectname:'currency conveter',

  },
   {
    id:4, 
    link:"https://arpitbhatia23.github.io/textutilies/",
    image:textutilies,
    projectname:'textutilies',

  },
  {
    id:5, 
    link:"https://anonmyus-instaviewers.vercel.app/",
    image:image,
    projectname:'instaviewer',

  },


]
  return (
  <div className=' md:min-h-screen min-w-screen min-h-screen bg-gradient-to-b from-black to-gray-600'>
<div className=' text-white text-3xl mb-3 h-20 flex items-center justify-center'> Projects</div>
    <div name="Projects" className='  justify-items-center items-center   grid grid-cols-2   gap-x-2 gap-y-7 md:space-x-20  md:flex md:grid-cols-4  md:justify-items-center '>

{projects.map(({id,link,image,projectname})=>(
  <Tilt  key={id}>
  <a href={link}>
  <div className='border border-orange-500 shadow-md shadow-orange-500 px-7 w-5/6 h-5/6 py-4 rounded-xl'>
    <img src={image} className='w-5/6    ' alt="" /> 
    <p className='text-white'>{projectname}</p>
     </div></a>
     </Tilt>
))

}


</div>
</div>
  )
}

export default Projects
