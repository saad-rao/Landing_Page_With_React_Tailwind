import logo from "../assets/images/logo (1).png"
import { Github, Twitter, Linkedin,} from "lucide-react";

const Footer = () =>{
    return(
        <>
        
        <div className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="logo" className="w-32" />
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Lorem ipsum dolor serit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore dolore magna aliquyam erat
            diam voluptua.
          </p>
          <div className="socials flex gap-4">
            <a
              href="https://github.com/saad-rao" 
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full hover:bg-teal-500 transition-all duration-300"
            >
              <Github className="text-white" />
            </a>
            <a
              href="https://x.com/Saad_X_0_0"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full hover:bg-teal-500 transition-all duration-300"
            >
              <Twitter className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/saad-naseem-99651a2b4/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full hover:bg-teal-500 transition-all duration-300"
            >
              <Linkedin className="text-white" />
            </a>
           
          </div>
        </div>

        {/* Quick Link 1 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Link</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Services
              </a>
            </li>
           
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link 2 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Link</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Cardiology
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Neurology
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Gastreology
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Routine Checkup
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Orthopedics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Dental Surgery
              </a>
            </li>
          </ul>
        </div>

        {/* Medical Location */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Medical Location
          </h4>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.9537353153167!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f2a4b1c4b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-1 border-gray-500 mt-10 pt-10 text-center">
        <p className="text-gray-100 text-xl">Made With ❤ by <a href="https://github.com/saad-rao" target="_blank" className="hover:text-teal-500">Saad Naseem</a></p>
      </div>
    </div>
        </>
    )
}

export default Footer