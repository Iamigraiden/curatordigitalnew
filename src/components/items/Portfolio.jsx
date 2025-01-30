import React, { useEffect } from "react";
import "./css/item.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Portfoliocard from "./Portfoliocard";
import Projectslider from "./Projectslider";

function Portfolio() {
  useEffect(() => {
    Aos.init({
      once: false,  
    });
  }, []);
  return (
    <>
      <div className="portfolio-container container-fluid  px-3 pb-5">
        {/* top heading  */}
        <div className="row gap-lg-5 row-gap-4">
          <div className="text-capitalize text-start left-section offset-lg-2 col-lg-4 col-md-6">
            {/* <h1 className="display-1 text-white">
              passionate about craft.
              <span className="color1"> driven by impact.</span>
            </h1> */}
               <h4 className="display-1 text-black mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">passionate</h4> 
                <h4 className="display-1 text-black mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">about craft.</h4> 
                <h4 className="color1 display-1 mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">driven by</h4>
                <h4 className="color1 display-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">impact.</h4>
          </div>
          <div className="align-self-end text-black text-start col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
            <p className="fs-5">
              Our work is intuitive, aesthetic, and functional, designed to
              engage audiences, boost sales, and elevate your brand.
            </p>
          </div>
        </div>
        {/* card section  */}
        <div className="portfolio-mid">
              <Projectslider/>
        </div>
        <div className="projectbtn py-md-5 pe-md-5">
                <NavLink to="/" className="text-decoration-none">
                  <button className="btn p-btn border-0 py-0 ms-auto text-capitalize border-bottom border-black rounded-0">
                 <span>&rarr; see all our projects</span>
                  </button>
                </NavLink>
              </div>
      </div>
    </>
  );
}

export default Portfolio;
