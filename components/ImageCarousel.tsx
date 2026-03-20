import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel() {
    return (
        <div className="w-full max-w-4xl overflow-hidden">
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
        >
            <SwiperSlide>
                <img src="/cSharp.svg" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/cSharp.svg" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/cSharp.svg" className="w-full h-full object-cover" />
            </SwiperSlide>
            </Swiper>
        </div>
    );
}