import "./testimonials.css";
import Skill from "./Skill";
import skills from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Grid, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>My skill set</h2>
      <p>
        Here are my daily-utilized skills and tools for web development, data
        analysis, and more.
      </p>
      <div className="container">
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id}>
              <Skill skill={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
