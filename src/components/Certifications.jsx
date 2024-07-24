import React from 'react'
import javascript from '../assets/certificates/javascriptcertificate.png'
import react from '../assets/certificates/reactCertificate.png'
import crsbox from '../assets/certificates/crsboxwebdev.png'
import project from '../assets/certificates/projectmanagement.png'
import csr from '../assets/certificates/crsprojectmanagement.png'
import webtest from '../assets/certificates/webtestinganddeploy.png'
import web from "../assets/certificates/webdev.png"
import mern from '../assets/certificates/mern.png'
import { Tilt } from 'react-tilt'
const Certifications = () => {
    const certificate=[
        {
            id:1,
            image:javascript,  
        },
        {
          id:2,
          image:react,
      },
      {
        id:3,
        image:crsbox,
    },
    {
      id:4,
      image:csr,
  }, {
    id:5,
    image:project,
},
{
  id:6,
  image:webtest,
},
{
  id:7,
  image:web,
   },
{
id :8,
image:mern
}
    ]
  return (
    <div className=' w-[100vw] min-h-screen md:min-h-screen bg-diagonal-gradient text-white ' name="certificates">
     <div className='text-center text-2xl py-8 '>
        Certificates
     </div>
     <div className='flex justify-center items-center gap-5 pb-8'>
     <div className=' grid  grid-cols-2 md:grid-cols-4 justify-center gap-x-10 gap-y-8'>
        {
          certificate.map((items)=>(
            <Tilt key={items.id}>
            <div  className='  animate-neon  '>
              <img src={items.image} alt=" img" className='h-52 w-80 ' />
            </div>
            </Tilt>
          ))
        }
        </div>
        </div>
    </div>
  )
}

export default Certifications
