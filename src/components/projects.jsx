import React from 'react'
import profile from '../assets/profile.jpg'
import reactweather from'../assets/reactWeather.png'
import weather from'../assets/weather.png'
import currency from'../assets/currency.png'
import textutilies from'../assets/textutilies.png'

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

  }, {
    id:4, 
    link:"https://arpitbhatia23.github.io/textutilies/",
    image:textutilies,
    projectname:'textutilies',

  },


]
  return (
  <div className='max-w-screen-[100vw] max-h-screen bg-gradient-to-b from-black to-gray-600'>
<div className=' text-white text-3xl mb-3 h-20 flex items-center justify-center'> Projects</div>
    <div name="Projects" className='  justify-items-center items-center   grid grid-cols-2   space-x-0 md:space-x-20  md:flex  md:justify-center '>

{projects.map(({id,link,image,projectname})=>(
  <div key={id} className=' border-2 border-orange-600  gap-3 my-4 w-40 h-44  rounded-xl grid   items-end justify-items-center  md:h-64 md:w-60 shadow-xl shadow-orange-600  '>
    <a href={link}><img src={image} className='w-40  md:w-60    ' alt="" /></a> 
    <p className='text-white'>{projectname}</p>
     </div>
))

}


</div>
</div>
  )
}

export default Projects
