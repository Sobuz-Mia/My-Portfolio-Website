import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// image import
import img_1 from '../assets/images/project_2/food-1.png'
import img_2 from '../assets/images/project_2/food-2.png'
import img_3 from '../assets/images/project_2/food-3.png'

import { Autoplay, Pagination } from "swiper/modules";
const Project_2 = () => {
    return (
        <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
          dynamicBullets: false
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img_3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Project_2;