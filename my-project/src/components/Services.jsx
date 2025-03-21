import React from 'react'
import cardio from '../assets/images/cardio.png'
import neuro from '../assets/images/neuro.png'
import gasteroiology from '../assets/images/gasteroiology.png'
import orthopedics from '../assets/images/orthopedics.png'
import gynecology from '../assets/images/gynecology.png'
import dental from '../assets/images/dental.png'

const Services = () => {
    return (
       <>
     <div className="py-16 bg-gray-50">
           <div className="max-w-6xl mx-auto px-4 text-center">
             {/* Text Section */}
             <div className="mb-8 animate__animated animate__fadeIn animate__delay-1s">
               <p className="text-[25px] text-teal-500 font-semibold mb-6" data-aos="fade-down"
          data-aos-delay="100">Services</p>
               <h2 className="text-[45px] md:text-4xl font-bold text-gray-800 mb-6"  data-aos="fade-down"
          data-aos-delay="200">
               Our Healthcare Services

               </h2>
               <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300">
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                 nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                 erat, sed diam voluptua.
               
               </p>
             </div>
     
            
            
           </div>
         </div>

         <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Cardiology */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300 group" 
        data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="mb-4">
            <img src={cardio} alt="cardiology" className="w-12 h-12 mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert object-contain" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
            Cardiology
          </h4>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy
            eirmod tempor invidunt.
          </p>
          <a
            href="#"
            className="text-teal-500 font-semibold flex items-center gap-2 group-hover:text-white"
          >
            Read More
            <span className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        {/* Neurology */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300 group"
        data-aos="fade-up"
        data-aos-delay="200">
          <div className="mb-4">
            <img src={neuro} alt="neurology" className="w-12 h-12 mx-auto group-hover:filter object-contain group-hover:brightness-0 group-hover:invert" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
            Neurology
          </h4>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy
            eirmod tempor invidunt.
          </p>
          <a
            href="#"
            className="text-teal-500 font-semibold flex items-center gap-2 group-hover:text-white"
          >
            Read More
            <span className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        {/* Gastroenterology */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300 group"
        data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="mb-4">
            <img src={gasteroiology} alt="gastroenterology" className="w-12 h-12 mx-auto object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
            Gastroenterology
          </h4>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy
            eirmod tempor invidunt.
          </p>
          <a
            href="#"
            className="text-teal-500 font-semibold flex items-center gap-2 group-hover:text-white"
          >
            Read More
            <span className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        {/* Orthopedics */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300 group"
        data-aos="fade-up"
          data-aos-delay="400">
          <div className="mb-4">
            <img src={orthopedics} alt="orthopedics" className="w-12 h-12 mx-auto object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
            Orthopedics
          </h4>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy
            eirmod tempor invidunt.
          </p>
          <a
            href="#"
            className="text-teal-500 font-semibold flex items-center gap-2 group-hover:text-white"
          >
            Read More
            <span className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        {/* Gynecology */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:bg-teal-500 hover:text-white transition-all duration-300 group"
        data-aos="fade-up"
        data-aos-delay="500">
          <div className="mb-4">
            <img src={gynecology} alt="gynecology" className="w-12 h-12 object-contain mx-auto group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
            Gynecology
          </h4>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy
            eirmod tempor invidunt.
          </p>
          <a
            href="#"
            className="text-teal-500 font-semibold flex items-center gap-2 group-hover:text-white"
          >
            Read More
            <span className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        {/* Dental Surgery */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:bg-teal-500 hover:text-white transition-all1 duration-300 group"
        data-aos="fade-up"
        data-aos-delay="600">
          <div className="mb-4">
            <img src={dental} alt="dental surgery" className="w-12 h-12 mx-auto object-contain group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white">
            Dental Surgery
          </h4>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy
            eirmod tempor invidunt.
          </p>
          <a
            href="#"
            className="text-teal-500 font-semibold flex items-center gap-2 group-hover:text-white"
          >
            Read More
            <span className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
       </>
    );
}

export default Services