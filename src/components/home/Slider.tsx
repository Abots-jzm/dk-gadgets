import { Swiper, SwiperSlide } from "swiper/react";
import Slide1PNG from "../../assets/slide-1.png";
import Slide2PNG from "../../assets/slide-2.png";
import Slide3PNG from "../../assets/slide-3.png";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import MenuDetails from "./MenuDetails";
import { MenuDetail } from "./types";

type Props = {
  activeMenu: MenuDetail[] | null;
};

function Slider({ activeMenu }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      <MenuDetails data={activeMenu} />
      <SwiperSlide>
        <img src={Slide1PNG} alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide2PNG} alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide3PNG} alt="slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
