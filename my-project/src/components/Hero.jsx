import { useState, useEffect } from "react";

const Hero = () => {
  // Slides data
  const slides = [
    {
      heading: "Complete Healthcare Solution",
      description:
        "Lorem ipsum dolor sit amet, consectetur sadipscing elitir, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consectetur sadipscing elitir.",
      buttonText: "Learn More",
      backgroundImage: "https://preview.uideck.com/items/medic/assets/img/slider/slider-1.jpg", // Replace with actual image
    },
    {
      heading: "Your Health is Our Top Priority",
      description:
        "Lorem ipsum dolor sit amet, consectetur sadipscing elitir, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consectetur sadipscing elitir.",
      buttonText: "Our Services",
      backgroundImage: "https://preview.uideck.com/items/medic/assets/img/slider/slider-2.jpg", // Replace with actual image
    },
    {
      heading: "Best Doctors and Equipments in Town",
      description:
        "Lorem ipsum dolor sit amet, consectetur sadipscing elitir, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consectetur sadipscing elitir.",
      buttonText: "Make Appointment",
      backgroundImage: "https://preview.uideck.com/items/medic/assets/img/slider/slider-2.jpg", // Replace with actual image
    },
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/70 to-teal-500/30"></div>

          {/* Slide Content */}
          <div className="relative z-10 flex items-center justify-start h-full px-4 md:px-16">
            <div className="text-white max-w-lg">
              <h1 className="text-3xl md:text-[60px] font-bold leading-tight mb-4">
                {slide.heading}
              </h1>
              <p className="text-[18px] md:text-base mb-6">{slide.description}</p>
              <button className="bg-white text-teal-500 font-semibold py-4 px-8 rounded-4xl hover:bg-teal-500 hover:text-white transition-colors">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 cursor-pointer">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;