import React from "react";
import Slider from "react-slick"
import { Row, Col, Card, Container, Carousel } from "react-bootstrap";

function Partnr() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className="partner-section pt-4">
        <h3 className="text-center">These companies trust you</h3>
        <Slider {...settings}>
          <div>
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/04/NBC-LOGO-2.png?auto=format&q=60&fit=max&w=930" />
          </div>
          <div>
            <img src="https://download.logo.wine/logo/Nikola_Motor_Company/Nikola_Motor_Company-Logo.wine.png" />
          </div>
          <div>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen.jpg?ts=1561532453" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/3a/8d/cd/3a8dcdc8c14f2816454a8e6be074e4fa.png" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChefrC8onwWWHN1iu2boeNZDoWFlSS_VnFQ&usqp=CAU" />
          </div>
        </Slider>
      </div>
    </Container>
  );
}

export default Partnr;
