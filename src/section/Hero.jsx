import React, { useState, useEffect } from 'react';

const images = [
  'https://contentstatic.techgig.com/photo/88607432/a-to-z-of-technology-top-tech-news-of-2021-at-a-glance.jpg?32786', // Replace with your image paths
  'https://i0.wp.com/cresthub.com/wp-content/uploads/2022/10/IMG-20221004-WA0016.jpg?resize=602%2C340&ssl=1',
  'https://www.atees.in/wp-content/uploads/2016/12/IT-Company-thrissur.jpg',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Stay Updated with the Latest Tech <br/> Related News
          </h1>
          <p className="mt-4 text-sm  md:text-xl text-white">
            Bringing you the latest in technology, trends, and innovations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
