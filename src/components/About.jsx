import React from 'react';
import profile from '../assets/profile.jpg';

function About() {
  return (
    <div name="About" className="flex justify-center  py-4   text-white bg-diagonal-gradient px-12 w-[100vw] ">
      <div className="flex flex-col  w-full items-center py-2 justify-center gap-x-4 h-full">
        <div className="flex w-full mt-8 md:mt-0 md:w-1/2 justify-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full  w-52  "
          />
        </div>
        <div className="text-center">
          <p className="text-2xl text-center py-4 font-cursive ">About Me</p>
          <p className=" text-2xl font-cursive space-x-1">
I am a passionate MERN stack developer with a Bachelor's degree in Computer Applications (BCA) from Himachal Pradesh University (HPU). My expertise lies in building scalable, efficient, and user-friendly web applications.I have completed certifications in JavaScript, React.js, and MERN stack from Infosys Springboard. Additionally, I hold certifications in React and problem-solving (basic level) from HackerRank.I gained hands-on experience during a six-week frontend development internship from IBM SkillBuild, in collaboration with CRSBox, where I honed my skills in creating responsive and interactive user interfaces.
I am always eager to explore new technologies, solve complex problems, and contribute to innovative projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
