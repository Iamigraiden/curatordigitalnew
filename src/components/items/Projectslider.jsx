import React from 'react'
import './css/item.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

function Projectslider() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]};
  return (
    <div>
       <div className="slider-container">
      <Slider {...settings}>
         {/*pernoid richard card */}
        <div>
        <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div className="img_area overflow-hidden">
                <img
                  src="/assets/images/Pernod.webp"
                  alt="image"
                  className="img-fluid  w-100"
                />
                <div className="description">
                  <p className="text-black mb-0  bg-white px-4 py-2 rounded-pill text-uppercase">Cocktail App</p>
                </div>
              </div>
              <div className="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">pernod richard</h4>
                <div className="workdetail">
                <p>Strategy</p>
                <p>Brand Guide</p>
                <p>UI/UX</p>
                <p>App Development</p>
                </div>
              </div>
            </div>
              </NavLink>
        </div>
          {/*blysk card */}
        <div>
        <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div className="img_area overflow-hidden">
                <img
                  src="/assets/images/BlyskJewels.webp"
                  alt="image"
                  className="img-fluid  w-100"
                />
                <div className="description">
                  <p className="text-black mb-0 text-uppercase bg-white px-4 py-2 rounded-pill">ecommerce</p>
                </div>
              </div>
              <div className="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">blysk jewels</h4>
                <div className="workdetail">
                <p>Naming</p>
                <p>Brand Guide</p>
                <p>Website Design</p>
                <p>Ecommerce</p>
                <p>Product Shoots</p>
                <p>Digital Marketing</p>
                </div>
              </div>
            </div>
              </NavLink>
        </div>
        {/*Discovery wines card */}
        <div>
        <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div className="img_area overflow-hidden">
                <img
                  src="/assets/images/DiscoveryWines.webp"
                  alt="image"
                  className="img-fluid w-100"
                />
                <div className="description d-flex gap-2 text-center">
                  <p className="text-black mb-0 bg-white px-4 py-2 rounded-pill text-uppercase">digital marketing</p>
                  <p className="text-black mb-0 bg-white px-4 py-2 rounded-pill text-uppercase">in-store creative</p>
                </div>
              </div>
              <div className="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">Discovery Wines</h4>
                <div className="workdetail">
                <p>in-Store Promotion</p>
                <p>Digitalized Store</p>
                <p>Digital Marketing</p>
                <p>Seasonal Campaign</p>
                </div>
              </div>
            </div>
              </NavLink>
        </div>
        {/*veermanpreet card */}
        <div>
        <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div className="video_area overflow-hidden">
                <video muted autoPlay loop src="/assets/video/Veermanpreet.mp4" type="video/mp4" className="object-fit-cover"/>
                
                <div className="description">
                  <p className="text-black bg-white px-4 py-2 rounded-pill mb-0 text-uppercase">youtube content</p>
                </div>
              </div>
              <div className="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">Veer Manpreet (UK)</h4>
                <div className="workdetail">
                <p>Video Production</p>
                <p>Video Editing</p>
                </div>
              </div>
            </div>
              </NavLink>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Projectslider
