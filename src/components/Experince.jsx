import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import github from'../assets/github.png'
import redux from '../assets/redux.png'
import git from '../assets/git.png'
import {Tilt} from 'react-tilt'
import mongoodb from '../assets/mongo-db.png'
import express from '../assets/express-js.png'
import node from '../assets/node.png'

const Experince = () => {
    const tech=[
        {
            id:1,
            image: html,
            text:'html',
            className:"shadow-purple-700 shadow-xl border-purple-600 border-2  rounded-xl"

        }, 
           {
            id:2,
            image: css,
            text:'css',
            className:"shadow-purple-600 shadow-xl border-purple-600 border-2 rounded-xl",


        },
        {
            id:3,
            image: tailwind,
            text:'tailwind',
            className:"shadow-cyan-600 shadow-xl border-cyan-600 border-2 rounded-xl",


        },
        {
            id:4,
            image: bootstrap,
            text:'bootstrap',
            className:"shadow-purple-600 shadow-xl border-purple-600 border-2 rounded-xl",


        },
        {
            id:5,
            image: js,
            text:'js',
            className:"shadow-yellow-400 shadow-xl border-yellow-400 border-2 rounded-xl",



        },
        {
            id:6,
            image: react,
            text:'react',
            className:"shadow-blue-600 shadow-xl border-blue-400 border-2 rounded-xl",


        },
        {
            id:7,
            image: github,
            text:'github',

            className:"shadow-white shadow-xl border-white border-2 rounded-xl",

        },
        {
            id:8,
            image:redux,
            text:'redux ',
            className:"shadow-purple-600 shadow-xl border-purple-600 border-2 rounded-xl",
        }, {
            id:9,
            image: git,
            text:'git',
            className:"shadow-orange-600 shadow-xl border-orange-600 border-2 rounded-xl",
        },
        {
            id:10,
            image:mongoodb,
            text:"mongodb"
        },
        {
            id:11,
            image:node,
            text:"Node.js"
        },
        {
            id:13,
            image:express,
            text:"express.js"
        }
    ]
  return (
    <div className='  w-[100vw] max-h-screen md:min-h-screen bg-diagonal-gradient text-white' name="Experince">
      
      <div className=' flex justify-center  text-white text-3xl py-4 ' >
     Experince In
        </div>
      <div className=' grid grid-cols-3 gap-4 justify-items-center pb-4 items-center ' >
        {
            tech.map(({id,image ,text})=>(
                <Tilt key={id} >
                <div className={`  w-20 md:w-48   rounded-xl   flex flex-col items-center justify-items-center py-4 px-4 my-3 animate-neon`}>
                    <img src={image} alt="" className='w-3/6 rounded-sm'/>
                    <p className='text-center text-white'>{text}</p>

                </div>
                </Tilt>
              
            ))
        }

       </div>
   
    </div>
  )
}

export default Experince
