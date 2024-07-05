"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import testimonial_data from "@/data/testimonialData";
import Image from "next/image";

import quoteIcon from "@/assets/img/testimonials/quote-icon.png";
import testimonialCircle from "@/assets/img/testimonials/testimonial-two-bg.png";
import testimonialImg from "@/assets/img/testimonials/testimonial-two-left.png";

import testimonialThumb_1 from "@/assets/img/testimonials/testi-thumb1.jpg";
import testimonialThumb_2 from "@/assets/img/testimonials/testi-thumb2.jpg";
import testimonialThumb_3 from "@/assets/img/testimonials/testi-thumb3.jpg";

const Testimonial = ({ style }: any) => {
  const slider1Ref = useRef<Slider | null>(null);
  const slider2Ref = useRef<Slider | null>(null);

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      slider1Ref.current.slickGoTo(2);
    }
  }, []);

  const [ImgSrc, setImgSrc] = useState(testimonialImg);

  const handleFirstImgChange = () => {
    setImgSrc(testimonialImg);
  };

  const handleSecImgChange = () => {
    setImgSrc(testimonialImg);
  };

  const handlethirdImgChange = () => {
    setImgSrc(testimonialImg);
  };

  return (
    <div className={`testimonials-area-two ${style ? "py-120" : "pb-120"}`}>
      <div className="container">
        <div className="row gap-100 align-items-center">
          <div className="col-lg-5">
            <div className="testimonial-two-image rel z-1 rmb-65">
              <Image
                className="circle-shape top_image_bounce"
                src={testimonialCircle}
                alt="World"
              />
              <Image
                src={ImgSrc}
                alt="Testimonials"
              />
              <style dangerouslySetInnerHTML={{ __html: `
                .testimonial-two-image::after {
                  content: "";
                  width: 100%;
                  height: 30%;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  background: linear-gradient(to top, #fff, #fff, transparent);
                  z-index: 10000;
                }
              ` }} />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testimonial-style-two rel">
              <Slider
                slidesToShow={3}
                slidesToScroll={3}
                arrows={false}
                autoplay={false} // Set autoplay to false
                fade={true}
                autoplaySpeed={2000}
                asNavFor={slider2Ref.current as Slider | undefined}
                ref={(slider) => (slider1Ref.current = slider)}
                className="testimonial-content-slider"
              >
                {testimonial_data
                  .filter((item) => item.page === "home_2")
                  .map((item) => (
                    <div key={item.id} className="testimonial-content-item">
                      <div className="icon">
                        <Image src={quoteIcon} alt="Quote" />
                      </div>
                      <div className="text">{item.desc}</div>
                      <div className="ratting">
                        {item.rating?.map((rating, i) => (
                          <i key={i} className={rating}></i>
                        ))}
                      </div>
                      <h4>{item.name}</h4>
                      <span className="designation">{item.designation}</span>
                    </div>
                  ))}
              </Slider>
              {/* <Slider
                slidesToShow={3}
                slidesToScroll={1}
                asNavFor={slider1Ref.current as Slider | undefined}
                ref={(slider) => (slider2Ref.current = slider)}
                dots={false}
                autoplay={false}
                vertical={true}
                verticalSwiping={true}
                variableWidth={true}
                autoplaySpeed={3000}
                centerMode={false}
                focusOnSelect={true}
                arrows={false}
                className="testimonial-thumb-two"
              > */}
                {/* <div className="testimonial-thumb-item">
                  <Image
                    src={testimonialThumb_1}
                    alt="Author"
                    onClick={handlethirdImgChange}
                  />
                </div> */}
                {/* <div className="testimonial-thumb-item">
                  <Image
                    src={testimonialThumb_2}
                    alt="Author"
                    onClick={handleFirstImgChange}
                  />
                </div> */}
                {/* <div className="testimonial-thumb-item">
                  <Image
                    src={testimonialThumb_3}
                    alt="Author"
                    onClick={handleSecImgChange}
                  />
                </div> */}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
