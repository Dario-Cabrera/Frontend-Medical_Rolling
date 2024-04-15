import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "https://www.insightpss.com.au/wp-content/uploads/2015/08/Happy-Doctors.jpg",
    "https://www.meditips.com/wp-content/uploads/2017/07/AdobeStock_103968342-scaled-uai-1032x688.jpeg",
    "https://th.bing.com/th/id/R.58cd411161f9d79b170194150a4f02dd?rik=aSkX38VED8GkWg&pid=ImgRaw&r=0",
    "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/GTYSdDW/group-of-happy-doctors-meeting-at-hospital-office_vk3wwzkb_thumbnail-1080_01.png",
    "https://www.rotageek.com/hubfs/Happy%20doctors%20happy%20patients%20-%20hero%20header.jpg",
    "https://th.bing.com/th/id/R.25121d64c7633b712d969f5a36e91c78?rik=H%2fDUaFPumfXLdA&pid=ImgRaw&r=0",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="hero min-h-screen font-sans" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-w text-opacity-90 shadow-24g" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                  Medical Rolling
                </h1>
                <button className="btn btn-info bg-ts hover:bg-hb hover:text-w">¡SOLICITA AHORA!</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
