// components/Hero.js
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-96">
      <Image
        src="/hero-image.jpg" // Ensure this image exists in the public folder
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Indian Kitchen Eateries</h1>
        <p className="mt-4 text-lg md:text-2xl">Delicious Snacks from India</p>
      </div>
    </div>
  );
};

export default Hero;
