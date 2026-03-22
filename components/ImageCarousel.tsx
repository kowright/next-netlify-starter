import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//export type ImageCarouselSlideProps = {
//    imageSource: string;
//    linkSource: string;
//}
type ImageCarouselProps = {
    imageSources: string[];
}

export default function ImageCarousel( {imageSources} : ImageCarouselProps) {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-100">
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
                {imageSources.map((image, idx) => {
                    return (
                        <SwiperSlide key={idx} className="block w-full h-full">
                         
                                <img
                                    src={image}
                                    className="w-full h-full object-contain pt-4 pb-4"
                                />
                   
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}