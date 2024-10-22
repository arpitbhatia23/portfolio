import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from 'react-scroll';
import Footer from './Footer';

const Contacts = () => {
  return (
    <div name="Contact" className=" w-[100vw]  bg-diagonal-gradient font-cursive">
      <div className="flex items-center justify-center text-white flex-col py-8 text-3xl">
        Get in Touch
      </div>

      <div className="flex flex-col md:flex-row justify-center  w-full">
        {/* Services Section */}
        <div className="md:w-1/3 p-4 text-white  md:text-left">
          <h2 className="text-2xl mb-4">Services I Offer</h2>
          <ul className="list-inside text-xl">
            <li>Landing Pages Design & Development</li>
            <li>Full-Stack Website Development</li>
            <li>API Integration & Customization</li>
            <li>Backend Development & Database Management</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="text-white flex flex-col justify-center items-center w-full"
          >
            
            <input type="hidden" name="access_key" value="e632fd9c-4503-482a-bf46-9f3e5606d4fd" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-transparent border-2 rounded-md py-2 w-full md:w-96 my-2 px-4  " 
              
              required
            />
            <input
              type="tel"
              name="tel"
              placeholder="Enter your phone number"
              className="bg-transparent py-2 border-2 rounded-md my-2 w-full md:w-96  px-4"
              minLength={10}
              maxLength={13}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent py-2 border-2 rounded-md my-2 w-full md:w-96 px-4 "
              required
            />
            <textarea
              name="message"
              cols="50"
              rows="10"
              className="bg-transparent py-2 border-2 rounded-md my-2 w-full md:w-96 px-4"
              placeholder="Tell me about your project or requirements..."
              required
            ></textarea>
            <button className="bg-indigo-700 py-2 rounded-xl w-full md:w-32 my-4 hover:bg-indigo-600 transition duration-200">
              Let's Talk
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center mt-6 py-16">
        <Link to="Home" smooth duration={700}>
          <div className="h-8 w-8 animate-bounce text-white bg-indigo-700 px-2 py-2 rounded-full">
            <AiOutlineArrowUp />
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
