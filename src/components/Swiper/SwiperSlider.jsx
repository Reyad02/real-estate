import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperStyle.css';

import { Pagination, Navigation } from 'swiper/modules';

const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[85vh]"
      >
        <SwiperSlide>
          <div className="hero h-[100vh] lg:h-[85vh]" style={{ backgroundImage: 'url(https://i.ibb.co/Wcqd5Wm/Slider1.jpg)' }}>
            <div className="hero-overlay bg-opacity-45 "></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your Dream Home Awaits</h1>
                <p className="mb-5">Explore our curated selection of premium properties tailored to your needs.</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero h-[100vh] lg:h-[85vh]" style={{ backgroundImage: 'url(https://i.ibb.co/HD4RFf9/pexels-mark-2724749.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold pt-8">Experience Culinary Excellence at Home</h1>
                <p className="mb-5">Discover kitchens that inspire creativity and make everyday cooking a pleasure.</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero h-[100vh]  lg:h-[85vh]" style={{ backgroundImage: 'url(https://i.ibb.co/D7V4Ctp/pexels-sevenstorm-juhaszimrus-439391.jpg)' }}>
            <div className="hero-overlay bg-opacity-55 "></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Invest in Prime Real Estate</h1>
                <p className="mb-5">Explore opportunities with our portfolio of prestigious buildings that promise growth and prosperity.</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;