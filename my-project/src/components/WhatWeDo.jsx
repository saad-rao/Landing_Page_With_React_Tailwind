
// import { useEffect, useRef } from "react";
// import { User, Users, Heart, Home } from "lucide-react";

// const WhatWeDo = () => {
//   // Data for services
//   const services = [
//     { title: "Specialist Doctors", icon: <User size={40} className="text-teal-500" /> },
//     { title: "Frequent Visits", icon: <Users size={40} className="text-teal-500" /> },
//     { title: "Cordial Administration", icon: <Heart size={40} className="text-teal-500" /> },
//     { title: "Specialized Pharmacy", icon: <Home size={40} className="text-teal-500" /> },
//   ];

//   // Ref for heartbeat line animation
//   const heartbeatRef = useRef(null);

//   // Trigger heartbeat animation on mount
//   useEffect(() => {
//     const heartbeat = heartbeatRef.current;
//     if (heartbeat) {
//       heartbeat.classList.add("animate-heartbeat");
//     }
//   }, []);

//   return (
//     <>
//       <div className="py-16 bg-gray-50 relative overflow-hidden">
//         {/* Background DNA Graphic */}
//         <div className="absolute top-0 left-0 opacity-10">
//           <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M50 150 C 100 50, 150 50, 150 150 M50 50 C 100 150, 150 150, 150 50"
//               stroke="#4FD1C5"
//               strokeWidth="10"
//             />
//           </svg>
//         </div>

//         {/* Heading and Description */}
//         <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
//           <p className="text-lg text-teal-500 font-semibold mb-2">What We Do</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             What We Provide for Your Health
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetur sadipscing elitir, sed dinonumy <br />
//             eirmod tempor invidunt ut labore et dolore magn.
//           </p>
//         </div>

//         {/* Heartbeat Line */}
//         <div className="flex justify-center mb-12">
//           <div>
//             <svg
//               ref={heartbeatRef}
//               width="80%"
//               height="50"
//               viewBox="0 0 600 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="text-teal-500"
//             >
//               <path
//                 d="M0 25 H150 L180 5 L210 45 L240 25 H300 L330 5 L360 45 L390 25 H600"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="heartbeat-path"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Services */}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-${
//                 index + 2
//               }s`}
//             >
//               <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
//                 {service.icon}
//               </div>
//               <h5 className="text-lg font-semibold text-gray-800">{service.title}</h5>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// // Custom CSS for heartbeat animation
// const styles = `
//   .heartbeat-path {
//     stroke-dasharray: 1000;
//     stroke-dashoffset: 1000;
//     animation: draw 3s linear forwards;
//   }

//   @keyframes draw {
//     to {
//       stroke-dashoffset: 0;
//     }
//   }

//   .animate-heartbeat {
//     animation: heartbeat 1s infinite;
//   }

//   @keyframes heartbeat {
//     0%, 100% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(1.05);
//     }
//   }
// `;

// // Inject custom styles
// const styleSheet = document.createElement("style");
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// export default WhatWeDo;


import graphImg from "../assets/images/graph-img.png"
import React from "react";
import speacialistImg from "../assets/images/specialist-doc.png"
import frequentImg from "../assets/images/Frequent-Visits.png"
import cordialImg from "../assets/images/Cordial-Administration.png"
import pharmacyImg from "../assets/images/Specialized-Pharmacy.png"



const WhatWeDo = () =>{
  return (
      <>
      <div className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s ">
          <p className="text-[25px] text-teal-500 font-semibold mb-4"data-aos="fade-down"
          data-aos-delay="100">What We Do</p>
          <h2 className="text-[45px] md:text-4xl font-bold text-gray-800 mb-5" data-aos="fade-down"
          data-aos-delay="200"> What We Provide for Your Health</h2>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto" data-aos="fade-up"
          data-aos-delay="300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          dinonumy <br/> eirmod tempor invidunt ut labore et dolore magna
          </p>
          </div>
        
              <div className="flex justify-center mb-12" data-aos="fade-right" data-aos-delay="200">
                  <img src= {graphImg} alt="graph image" className="w-4/5 mx-auto" />
              </div>
      
  
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-2s">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
              <img src={speacialistImg} alt="specialist doctor" className="w-8 h-8" data-aos="fade-right" />
            </div>
            <h5 className="text-lg font-semibold text-gray-800">Specialist Doctors</h5>
          </div>

          <div className="flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-3s">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
              <img src={frequentImg} alt="frequent" className="w-8 h-8" data-aos="fade-down" />
            </div>
            <h5 className="text-lg font-semibold text-gray-800">Frequent Visits</h5>
          </div>

          <div className="flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-4s">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
              <img src={cordialImg} alt="cordial" className="w-8 h-8" data-aos="fade-left" />
            </div>
            <h5 className="text-lg font-semibold text-gray-800">Cordial Administration</h5>
          </div>

          <div className="flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-5s">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
              <img src={pharmacyImg} alt="pharmacy img" className="w-8 h-8" data-aos="fade-up "/>
            </div>
            <h5 className="text-lg font-semibold text-gray-800">Specialized Pharmacy</h5>
          </div>
        </div>
      </div>
      </>
  )
  }

  export default WhatWeDo;