import React from "react";
import "./css/aboutpage.css";
import Ourvalue from "../components/items/Ourvalue";
function Aboutus() {
  return (
    <div className="about-page">
        
        {/* About-top start */}
      <div className="container text-white px-3 our-story">
        <div className="row row-gap-4">
          <div className="col-12 col-md-5 left-col">
            <h1 className="display-3 fw-bold">Our Story</h1>
            <div className="text">
              <p className="lead">is driven by authenticity and understanding.</p>
            </div>
            <div className="col-12 col-md-auto img-col"></div>
          </div>
          <div className="col-12 col-md-7 right-col">
            <div className="text show-circled-italic js-fade-when-in-screen">
              <h2 className="display-5 fw-semibold">
                We are a passionate team of experts dedicated to creating your
                digital value.
              </h2>
              <p className="fs-5 text-white-50 mt-3">
                We create magical digital ideas, products and experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* About-top end */}
        {/* About-mid start */}
<section className="about-mid">
    {/* about-mid-who  */}
      <div className="container px-3 about-mid-who">
<div className="row text-white">
<div className="left-col col-12 col-md-6">
<h4 className="fs-3 fw-semibold col-title">Who We Are</h4>
<h4 className="fs-1 fw-semibold col-11 mt-5">We are an enthusiastic team sharing creativity and efficiency, passion and expertise.</h4>
</div>
<div className="right-col col-12 col-md-6">
    <img src="/assets/images/image-1-3.webp" alt="" className="img-fluid" />
</div>
</div>
</div>
    {/* about-mid-howwe  */}
    <div className="container-fluid px-5 about-mid-howwe text-white">
<h4 className="fs-3 fw-semibold col-title">How we do It</h4>
<div className="row text-white pt-5">
<div className="right-col col-12 col-lg-6">
    <div className="col-lg-10 text-center">
    <img src="/assets/images/image-1-3.webp" alt="" className="img-fluid" /></div>
</div>
<div className="col-12 col-lg-6">
    {/* row */}
  <div className="row py-4">
    <div className="col-md-2 align-self-center text-center">
      <img src="https://move-creative.com/wp-content/uploads/2023/06/Discovery-Move-Digital.svg" width={50}  className="img-fluid"/>
    </div>
    <div className="text-col col-md-10">
      <div className="title-c">
        <h3>Discovery</h3>
      </div>
      <div className="text-c">
        <p className="">
          We create digital products using modern design techniques. The works
          we implement are easy to understand, aesthetic, interactive and
          functional.
        </p>
      </div>
    </div>
  </div>
  <hr className="in-screen" />
      {/* row */}
      <div className="row py-4">
    <div className="col-md-2 align-self-center text-center">
      <img src="https://move-creative.com/wp-content/uploads/2023/06/Discovery-Move-Digital.svg" width={50}  className="img-fluid"/>
    </div>
    <div className="text-col col-md-10">
      <div className="title-c">
        <h3>Discovery</h3>
      </div>
      <div className="text-c">
        <p className="">
          We create digital products using modern design techniques. The works
          we implement are easy to understand, aesthetic, interactive and
          functional.
        </p>
      </div>
    </div>
  </div>
  <hr className="in-screen" />
      {/* row */}
      <div className="row py-4">
    <div className="col-md-2 align-self-center text-center">
      <img src="https://move-creative.com/wp-content/uploads/2023/06/Discovery-Move-Digital.svg" width={50}  className="img-fluid"/>
    </div>
    <div className="text-col col-md-10">
      <div className="title-c">
        <h3>Discovery</h3>
      </div>
      <div className="text-c">
        <p className="">
          We create digital products using modern design techniques. The works
          we implement are easy to understand, aesthetic, interactive and
          functional.
        </p>
      </div>
    </div>
  </div>
  <hr className="in-screen" />
      {/* row */}
      <div className="row py-4">
    <div className="col-md-2 align-self-center text-center">
      <img src="https://move-creative.com/wp-content/uploads/2023/06/Discovery-Move-Digital.svg" width={50}  className="img-fluid"/>
    </div>
    <div className="text-col col-md-10">
      <div className="title-c">
        <h3>Discovery</h3>
      </div>
      <div className="text-c">
        <p className="">
          We create digital products using modern design techniques. The works
          we implement are easy to understand, aesthetic, interactive and
          functional.
        </p>
      </div>
    </div>
  </div>
  <hr className="in-screen" />
  {/*  */}
</div>
</div>
</div>
</section>
{/* About-mid start */}
<Ourvalue/>
    </div>
  );
}

export default Aboutus;
