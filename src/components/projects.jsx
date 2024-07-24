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
    <div className=' md:min-h-screen w-[100vw] min-h-screen bg-diagonal-gradient text white  font-cursive ' name="project">
      
    <div className=' flex justify-center  text-white text-3xl py-4  ' >
Projects
      </div>
      <div className='flex justify-center items-start'>
    <div className=' grid  grid-cols-2 md:grid-cols-4 gap-x-11 gap-y-8 justify-items-center pb-4 items-center ' >
     
     
      {
          projects.map(({id,image ,className,projectname})=>(
              <Tilt key={id} >
              <div className={``}>
                  <img src={image} alt="" className=' rounded-xl h-52 w-72 animate-neon'/>
                  <p className='text-center text-white text-sm'>{projectname}</p>

              </div>
              </Tilt>
            
          ))
      }

     </div>
     </div>
 
  </div>

  )
}

export default Projects
