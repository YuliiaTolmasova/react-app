import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GallerySlider = (props) => {
    return (
    <div className="clinic-section__gallery">
        <div className="gallery-slider">

        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                  {props.gallery.data.map(({id, attributes}) => (
                                <SwiperSlide key={id}>
                    <div className="gallery-slider__slide">
                        <img src={attributes.url} alt={`gallery image ${id}`} />
                    </div>
                                    </SwiperSlide>
            ))}
                              {props.gallery.data.map(({id, attributes}) => (
                                <SwiperSlide key={id}>
                    <div className="gallery-slider__slide">
                        <img src={attributes.url} alt={`gallery image ${id}`} />
                    </div>
                                    </SwiperSlide>
            ))}
            </Swiper>
            </div>
        </div>
    );
};
export default GallerySlider;
