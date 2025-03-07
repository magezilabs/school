'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/media/images/campus.png", //image paths
  "/media/images/campus1.png",
  "/media/images/library.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual slide controls
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Image Slider */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Welcome to Conerstone Leadership Academy</h1>
        <p className="text-lg md:text-2xl mt-4 max-w-2xl">Come enjoy topclass, affordable, and our thrilling learning Environment.</p>
        <a href="/enrol" className="enrolment-btn">Enroll Now</a>
      </div>

      {/* Slide Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full text-white hover:bg-opacity-60 transition">
        <ChevronLeft size={30} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 p-3 rounded-full text-white hover:bg-opacity-60 transition">
        <ChevronRight size={30} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full bg-white transition-all duration-300 ${index === current ? 'bg-yellow-500 scale-125' : 'opacity-50'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
