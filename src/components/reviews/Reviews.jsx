import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./reviews.css";

import tempImg from "../../assets/reviews-temp.png";
import ellipseDesktop from '../../assets/reviews-ellipse-desktop.png';
import ellipseTablet from '../../assets/reviews-ellipse-desktop.png';
import ellipseMobile from '../../assets/reviews-ellipse-desktop.png';

export default function Reviews() {
  return (
    <section className="reviews">
        <picture>
          <source
              srcSet={ellipseMobile}
              media="(max-width: 767px)"
            />
            <source
              srcSet={ellipseTablet}
              media="(max-width: 1439px)"
            />
            <img
              className="reviews__ellipse"
              src={ellipseTablet}
              alt=""
            />
          </picture>
      <div className="reviews__container">
        <h2 className="reviews__header">Отзывы наших клиентов</h2>
        <p className="reviews__description">
          Все процессы нашей работы крайне прозрачны, чтобы вы были спокойны за
          своего ребенка.
        </p>
        <div className="reviews__swiper-container">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={false}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              390: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide className="reviews__card">
              <h3 className="reviews__card-title">Николай, Астана</h3>
              <img className="reviews__card-image" src={tempImg} alt="" />
              <p className="reviews__card-description">
                Грамотные специалисты которые дали качественную консультацию
              </p>
            </SwiperSlide>
            <SwiperSlide className="reviews__card">
              <h3 className="reviews__card-title">Николай, Астана</h3>
              <img className="reviews__card-image" src={tempImg} alt="" />
              <p className="reviews__card-description">
                Грамотные специалисты которые дали качественную консультацию
              </p>
            </SwiperSlide>
            <SwiperSlide className="reviews__card">
              <h3 className="reviews__card-title">Николай, Астана</h3>
              <img className="reviews__card-image" src={tempImg} alt="" />
              <p className="reviews__card-description">
                Грамотные специалисты которые дали качественную консультацию
              </p>
            </SwiperSlide>
            <SwiperSlide className="reviews__card">
              <h3 className="reviews__card-title">Николай, Астана</h3>
              <img className="reviews__card-image" src={tempImg} alt="" />
              <p className="reviews__card-description">
                Грамотные специалисты которые дали качественную консультацию
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
