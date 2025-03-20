import React from 'react';
import AboutImg from '../assets/images/about-img.png'

const About = () =>{
    return (
        <>
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Text Section */}
        <div className="mb-8 animate__animated animate__fadeIn animate__delay-1s">
          <p className="text-[25px] text-teal-500 font-semibold mb-6">About Us</p>
          <h2 className="text-[45px] md:text-4xl font-bold text-gray-800 mb-6">
            Welcome To Our Clinic
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sqit consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
          </p>
        </div>

        {/* Button Section */}
        <div className="mb-12 animate__animated animate__fadeIn animate__delay-2s">
          <button className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-600 hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="animate__animated animate__fadeIn animate__delay-3s">
          <img
            src={AboutImg}
            alt="about image"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
        </>
    )
}
export default About