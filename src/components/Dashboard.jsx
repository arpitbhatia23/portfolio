import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import mongoodb from '../assets/mongo-db.png';
import express from '../assets/express-js.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { Tilt } from 'react-tilt';

function Dashboard() {
  const technologies = [
    {
      id: 1,
      link: mongoodb,
      name: 'MongoDB',
    },
    {
      id: 2,
      link: express,
      name: 'Express.js',
    },
    {
      id: 3,
      link: react,
      name: 'React.js',
    },
    {
      id: 4,
      link: node,
      name: 'Node.js',
    },
  ];

  return (
    <div name="Home" className="md:min-h-screen min-h-screen w-[100vw]  bg-diagonal-gradient text-white font-cursive">
      <div className="min-w-full sm:max-w-screen-lg mx-auto flex flex-col items-center justify-end h-60 px-3 text-2xl sm:text-3xl space-x-2 font-cursive">
        <p>I'M A</p>
        <TypeAnimation 
          className="font-cursive text-center"
          sequence={[
            "FREELANCER DEVELOPER", 3000,
            'MERN DEVELOPER', 3000,
          ]}
          wrapper="div"
          speed={60}
          repeat={Infinity}
          cursor={true}
        />
      </div>
      <div className="flex flex-col items-center ml-2 md:ml-0">
        <p className="text-center w-full text-2xl">
          Hi, my name is Aurpit. I'm a MERN Stack Developer currently, and I love to work on web applications using technologies like:
        </p>
      </div>
      <div className="flex justify-center items-center w-full gap-x-7 py-8">
        {technologies.map(({ id, link, name }) => (
          <Tilt key={id}>
            <div className="text-center">
              <img src={link} alt={name} className="w-20 hover:am"/>
              <p className="text-white text-center">{name}</p>
            </div>
          </Tilt>
        ))}
      </div>
      <div className="w-full flex justify-center mt-5">
        <button className="bg-fuchsia-700 rounded-lg px-6 py-2 hover:bg-green-600 hover:scale-95 outline outline-offset-2 outline-1 hover:outline-red-600">
          <a href="Aurpit.docx" download="Aurpit.docx">
            Resume
          </a>
        </button>
      </div>
      <div className="flex py-10 items-center justify-center">
        <Link to="About" smooth duration={500}>
          <button className="mt-10 md:mt-[120px] animate-bounce bg-indigo-600 py-4 px-4 rounded-full">
            <AiOutlineArrowDown />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
