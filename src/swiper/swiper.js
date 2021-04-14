import { Swiper, SwiperSlide } from 'swiper/react';
import CreatePost from '../create-posts/create-posts';
import TimePage from '../time-page/time-page';

export default () => {
    return (
      <Swiper
        spaceBetween={200}
        slidesPerView={1}
        className="container"
      >
        <SwiperSlide>
            <CreatePost/>
        </SwiperSlide>
        <SwiperSlide>
        <TimePage/>
        </SwiperSlide>
        
      </Swiper>
    );
  };