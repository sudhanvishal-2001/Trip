import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/slider.css';

import { Pagination, Navigation } from 'swiper/modules';

// Slide data
const slidesData = [
  {
    id: 0,
    frontImage: 'https://www.figma.com/file/P4oFim1Q092SOCH6bkjnzc/image/6fbb44b8b08f9d5c0c94a5a40b7c49a99a66c1ce',
    backImage: 'https://www.figma.com/file/P4oFim1Q092SOCH6bkjnzc/image/6fbb44b8b08f9d5c0c94a5a40b7c49a99a66c1ce',
    backContent_h1: 'Ishigaki Island, Japan',
    backContent_p1: "A tropical gem in Okinawa, Ishigaki Island boasts Japan's most breathtaking ocean spots. Known for its crystal-clear turquoise waters, vibrant coral reefs, and white sandy beaches, it's a paradise for snorkeling, diving, and relaxing.",
    backContent_h2: 'Top Highlights',
    backContent_p2: "Explore Kabira Bay's shimmering emerald waters (no swimming allowed). Dive into the coral-filled waters at Manta Scramble to spot manta rays. Relax on Yonehara Beach, perfect for snorkeling and sunbathing.",
    backContent_h3: 'Best Time to Visit',
    backContent_p3: 'Summer (May to October) for warm waters and excellent visibility, especially during the calm typhoon season.',
    backContent_h4: 'Travel Tip',
    backContent_p4: "Rent a car or bike to explore the island's hidden spots, and don't miss the local Okinawan cuisine, especially Ishigaki beef!",
    
  },
  {
    id: 1,
    frontImage: 'https://s3-alpha-sig.figma.com/img/403d/0daf/8a53e35d51d35521b4981d8ae62eb122?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6xST9ctXja7Sk9gRv4jX3uraXCAeOLQUitt3IZhIn4nOuqj6JOqswuz2chfWIfTdyA2xF1bs~Bn4Xs7Umcje4l4f8oGv70NtApS3Z0gktt-~q9Ln74OV747AItzyDOSNxOvhD77TZLXEQ5Gydi0FklxbQ~tBFIfYdQ2PK0KKl7IsCnU5kO-nZzIB5xuVuQHA5-W9hVjwD5vYUnw1gVyw3QvxoIUWJkFgoKbJ~AsaiQcoKygesiG~J7UIAuIblaoyzhx4Vzhu7rDVU2ZPKQMdoVHTIn69Je2TtNWvyExIXuT0JmdY5y1Uq8C3pqCjeCypkSIMaSLFaei84aN2RbeBA__',
    backImage: 'https://s3-alpha-sig.figma.com/img/403d/0daf/8a53e35d51d35521b4981d8ae62eb122?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6xST9ctXja7Sk9gRv4jX3uraXCAeOLQUitt3IZhIn4nOuqj6JOqswuz2chfWIfTdyA2xF1bs~Bn4Xs7Umcje4l4f8oGv70NtApS3Z0gktt-~q9Ln74OV747AItzyDOSNxOvhD77TZLXEQ5Gydi0FklxbQ~tBFIfYdQ2PK0KKl7IsCnU5kO-nZzIB5xuVuQHA5-W9hVjwD5vYUnw1gVyw3QvxoIUWJkFgoKbJ~AsaiQcoKygesiG~J7UIAuIblaoyzhx4Vzhu7rDVU2ZPKQMdoVHTIn69Je2TtNWvyExIXuT0JmdY5y1Uq8C3pqCjeCypkSIMaSLFaei84aN2RbeBA__',
    backContent_h1: 'Ishigaki Island, Japan',
    backContent_p1: "A tropical gem in Okinawa, Ishigaki Island boasts Japan's most breathtaking ocean spots. Known for its crystal-clear turquoise waters, vibrant coral reefs, and white sandy beaches, it's a paradise for snorkeling, diving, and relaxing.",
    backContent_h2: 'Top Highlights',
    backContent_p2: "Explore Kabira Bay's shimmering emerald waters (no swimming allowed). Dive into the coral-filled waters at Manta Scramble to spot manta rays. Relax on Yonehara Beach, perfect for snorkeling and sunbathing.",
    backContent_h3: 'Best Time to Visit',
    backContent_p3: 'Summer (May to October) for warm waters and excellent visibility, especially during the calm typhoon season.',
    backContent_h4: 'Travel Tip',
    backContent_p4: "Rent a car or bike to explore the island's hidden spots, and don't miss the local Okinawan cuisine, especially Ishigaki beef!",
  },
  {
    id: 2,
    frontImage: 'https://www.figma.com/file/P4oFim1Q092SOCH6bkjnzc/image/6fbb44b8b08f9d5c0c94a5a40b7c49a99a66c1ce',
    backImage: 'https://www.figma.com/file/P4oFim1Q092SOCH6bkjnzc/image/6fbb44b8b08f9d5c0c94a5a40b7c49a99a66c1ce',
    backContent_h1: 'Ishigaki Island, Japan',
    backContent_p1: "A tropical gem in Okinawa, Ishigaki Island boasts Japan's most breathtaking ocean spots. Known for its crystal-clear turquoise waters, vibrant coral reefs, and white sandy beaches, it's a paradise for snorkeling, diving, and relaxing.",
    backContent_h2: 'Top Highlights',
    backContent_p2: "Explore Kabira Bay's shimmering emerald waters (no swimming allowed). Dive into the coral-filled waters at Manta Scramble to spot manta rays. Relax on Yonehara Beach, perfect for snorkeling and sunbathing.",
    backContent_h3: 'Best Time to Visit',
    backContent_p3: 'Summer (May to October) for warm waters and excellent visibility, especially during the calm typhoon season.',
    backContent_h4: 'Travel Tip',
    backContent_p4: "Rent a car or bike to explore the island's hidden spots, and don't miss the local Okinawan cuisine, especially Ishigaki beef!",
  },
  {
    id: 3,
    frontImage: 'https://s3-alpha-sig.figma.com/img/403d/0daf/8a53e35d51d35521b4981d8ae62eb122?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6xST9ctXja7Sk9gRv4jX3uraXCAeOLQUitt3IZhIn4nOuqj6JOqswuz2chfWIfTdyA2xF1bs~Bn4Xs7Umcje4l4f8oGv70NtApS3Z0gktt-~q9Ln74OV747AItzyDOSNxOvhD77TZLXEQ5Gydi0FklxbQ~tBFIfYdQ2PK0KKl7IsCnU5kO-nZzIB5xuVuQHA5-W9hVjwD5vYUnw1gVyw3QvxoIUWJkFgoKbJ~AsaiQcoKygesiG~J7UIAuIblaoyzhx4Vzhu7rDVU2ZPKQMdoVHTIn69Je2TtNWvyExIXuT0JmdY5y1Uq8C3pqCjeCypkSIMaSLFaei84aN2RbeBA__',
    backImage: 'https://s3-alpha-sig.figma.com/img/403d/0daf/8a53e35d51d35521b4981d8ae62eb122?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6xST9ctXja7Sk9gRv4jX3uraXCAeOLQUitt3IZhIn4nOuqj6JOqswuz2chfWIfTdyA2xF1bs~Bn4Xs7Umcje4l4f8oGv70NtApS3Z0gktt-~q9Ln74OV747AItzyDOSNxOvhD77TZLXEQ5Gydi0FklxbQ~tBFIfYdQ2PK0KKl7IsCnU5kO-nZzIB5xuVuQHA5-W9hVjwD5vYUnw1gVyw3QvxoIUWJkFgoKbJ~AsaiQcoKygesiG~J7UIAuIblaoyzhx4Vzhu7rDVU2ZPKQMdoVHTIn69Je2TtNWvyExIXuT0JmdY5y1Uq8C3pqCjeCypkSIMaSLFaei84aN2RbeBA__',
    backContent_h1: 'Ishigaki Island, Japan',
    backContent_p1: "A tropical gem in Okinawa, Ishigaki Island boasts Japan's most breathtaking ocean spots. Known for its crystal-clear turquoise waters, vibrant coral reefs, and white sandy beaches, it's a paradise for snorkeling, diving, and relaxing.",
    backContent_h2: 'Top Highlights',
    backContent_p2: "Explore Kabira Bay's shimmering emerald waters (no swimming allowed). Dive into the coral-filled waters at Manta Scramble to spot manta rays. Relax on Yonehara Beach, perfect for snorkeling and sunbathing.",
    backContent_h3: 'Best Time to Visit',
    backContent_p3: 'Summer (May to October) for warm waters and excellent visibility, especially during the calm typhoon season.',
    backContent_h4: 'Travel Tip',
    backContent_p4: "Rent a car or bike to explore the island's hidden spots, and don't miss the local Okinawan cuisine, especially Ishigaki beef!",
  },
];

export default function Slider() {
  const [flippedSlides, setFlippedSlides] = useState(slidesData.map(() => false)); // Dynamic flip state based on slidesData

  const handleSlideClick = (index) => {
    setFlippedSlides((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle flip for the clicked slide
      return newState;
    });
  };

  return (
    <div className="slider-main">
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={false}
        // modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            onClick={() => handleSlideClick(index)}
            className={`${flippedSlides[index] ? 'flipped' : ''} swiper-slide-hide`}
          >
            <div className="flip-card-inner">
              <div className="front">
                <img src={slide.frontImage} alt={`Slide ${index + 1}`} />
              </div>
              <div className="back">
                <div className='back_content'>
                  <p>{slide.backContent_h1}</p>
                  <p>{slide.backContent_p1}</p>
                  <p>{slide.backContent_h2}</p>
                  <p>{slide.backContent_p2}</p>
                  <p>{slide.backContent_h3}</p>
                  <p>{slide.backContent_p3}</p>
                  <p>{slide.backContent_h4}</p>
                  <p>{slide.backContent_p4}</p>
                </div>
                <img src={slide.backImage} alt={`Slide ${index + 1} Back`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
