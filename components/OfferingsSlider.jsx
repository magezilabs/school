// components/OfferingsSlider.js
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OfferingsSlider() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slidesContent = [
    {
      title: "Favorable Learning Environment",
      description: "Our learning Environment leverages our rigorous academic programs preparing students for university and beyond.",
      src: "/media/videos/environment.mp4",
      type: "video"
    },
    {
      title: "Leadership Development",
      description: "We nurture leadership qualities through various programs and activities.",
      src: "/media/images/2.png",
      type: "image",
      alt: "leadership development"
    },
    {
      title: "Sports & Recreation",
      description: "Our students participate in a wide range of sports and recreational activities.",
      src: "/media/images/basketball.png",
      type: "image",
      alt: "Cornerstone Basketball team"
    },
    {
      title: "Religious Development",
      description: "Students' Prayer life is key to us and we are dedicated to producing God-fearing citizens aligned with good morals.",
      src: "/media/videos/prayer.mp4",
      type: "video"
    },
    {
      title: "Cultural Events",
      description: "We celebrate cultural diversity with various events and festivals.",
      src: "/media/videos/culture.mp4",
      type: "video"
    },
  ];

  return (
    <div className="bg-gray-100 py-7">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Offerings & Student Activities</h2>
      <Slider {...sliderSettings}>
        {slidesContent.map((content, index) => (
          <div key={index} className="h-[35rem] bg-gray-300 flex flex-col items-center justify-center">
            <div className="text-center bg-gray-700 bg-opacity-50 p-4 rounded-md mb-4 w-full">
              <h3 className="text-2xl font-semibold mb-2 text-white">{content.title}</h3>
              <p className="text-lg text-white">{content.description}</p>
            </div>
            {content.type === "video" ? (
              <video className="w-full h-full object-cover" src={content.src} autoPlay muted loop />
            ) : content.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={content.src}
                  alt={content.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ) : null}
          </div>
        ))}
      </Slider>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};
