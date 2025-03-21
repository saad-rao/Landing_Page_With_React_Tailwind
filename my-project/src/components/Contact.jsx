const Contact = () =>{
    return (
        <>
         <div className="py-16 bg-gray-50">
              <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Text Section */}
                <div className="mb-8 animate__animated animate__fadeIn animate__delay-1s">
                  <p className="text-[25px] text-teal-500 font-semibold mb-6"
                   data-aos="fade-down"
          data-aos-delay="100"
                  >Appoinment
                  </p>
                  <h2 className="text-[45px] md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-down"
          data-aos-delay="200">
                  Get Appoinment Now

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
      <div className="max-w-6xl mx-auto px-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Name (Dropdown) */}
          <div className="col-span-1">
            <select
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500" data-aos="fade-right"
              defaultValue=""
            >
              <option value="" disabled>
                Name
              </option>
              <option value="dr-h-m-nayeem">Dr. H M Nayeem</option>
              <option value="dr-john-doe">Dr. John Doe</option>
              <option value="dr-jane-smith">Dr. Jane Smith</option>
            </select>
          </div>

          {/* Email */}
          <div className="col-span-1" data-aos="fade-left">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Appointment Date */}
          <div className="col-span-1 md:col-span-2"data-aos="fade-right">
            <input
              type="date"
              placeholder="Appointment Date"
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Subject */}
          <div className="col-span-1 md:col-span-2"data-aos="fade-left">
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2"data-aos="fade-up">
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            ></textarea>
          </div>

          {/* Send Message Button */}
          <div className="col-span-1 md:col-span-2"data-aos="fade-right">
            <button
              type="submit"
              className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-600 hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>


        </>
    )
}


export default Contact